import fetchCollection from 'api/get/getCollection'
import { Fragment, useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import toggleLike from 'api/post/toggleLike'
import { AuthenticationContext } from 'providers/AuthenticationProvider'
import fetchLikeStatus from 'api/get/getLikeStatus'
import { Form } from 'react-bootstrap'
import postComment from 'api/post/postComment'
import { SocketContext } from 'providers/SocketProvider'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fetchComments from 'api/get/getComments'
import getLikes from 'api/get/getLikes'
import getCollectionsByTag from 'api/get/getCollectionsByTag'
import { useNavigate } from 'react-router-dom'

export default function Collection() {
    const { t } = useTranslation()
    const { collectionId } = useParams()
    const [collection, setCollection] = useState(null)
    const [comments, setComments] = useState([])
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(0)
    const { token } = useContext(AuthenticationContext)
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()
    const handleClick = () => {
        toggleLike(collectionId)
    }
    const handleSubmit = event => {
        event.preventDefault()
        postComment(token.uid, collectionId, event.target.elements.comment.value)
        event.target.elements.comment.value = ''
    }
    const handleTagClick = async tag => {
        const collections = await getCollectionsByTag(tag)
        navigate('/search', { state: collections })
    }
    useEffect(() => {
        fetchCollection(collectionId).then(result => setCollection(result))
        fetchComments(collectionId).then(result => setComments(result))
        getLikes(collectionId).then(result => setLikes(result.value))
        if (token) {
            fetchLikeStatus(token.uid, collectionId).then(result => setLiked(result))
        }
        socket.emit('joined comment section', collectionId)
        socket.on('new comment', comment => {
            fetchComments(collectionId).then(result => setComments(result))
        })
        socket.on('toggle like', comment => {
            getLikes(collectionId).then(result => setLikes(result.value))
            fetchLikeStatus(token.uid, collectionId).then(result => setLiked(result))
        })
        return () => {
            socket.emit('left comment section', collectionId)
        }
    }, [collectionId, socket, token])
    var i = 0
    return (
        <Container fluid>
            <div className='h1'>{collection?.title}</div>
            <div className='h3'>{t('uiDescription')}</div>
            <ListGroup className='mb-3'>
                <ListGroup.Item>
                    <ReactMarkdown children={collection?.description} remarkPlugins={[remarkGfm]} />
                </ListGroup.Item>
            </ListGroup>
            <div className='h3'>{t('uiTags')}</div>
            <ListGroup className='mb-3'>
                <ListGroup.Item>
                    {
                        collection?.tags?.map(tag => tag !== '' && <Button onClick={event => handleTagClick(tag)} className='me-2'>{tag}</Button>)
                    }
                </ListGroup.Item>
            </ListGroup>
            {
                collection?.items?.map(item =>
                    <Fragment key={'fragment' + i}>
                        <div className='h5 mt-4'>{item.title}</div>
                        <ListGroup>
                            {
                                item.properties.map(property => {
                                    var element
                                    if (property.type === 'image') {
                                        element = <Image className='item-image' src={property.value} />
                                    } else if (property.type === 'color') {
                                        element = <Form.Control type="color" disabled={true} defaultValue={property.value} />
                                    }
                                    else {
                                        element = <div>{property.value}</div>
                                    }
                                    return (
                                        <ListGroup.Item key={'field' + i++}>
                                            <div className='d-flex align-items-center' key={'flex' + i++}>
                                                <div className='h6 me-5'>{property.title}</div>
                                                {element}
                                            </div>
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </Fragment>
                )
            }
            <div className='d-flex align-items-center mb-3'>
                <Button className='bg-transparent border-0 me-1' variant={liked ? 'danger' : 'secondary'} onClick={handleClick}><FontAwesomeIcon icon={faHeart} color={liked ? 'red' : 'gray'} /></Button>
                <div>{likes + ' likes'}</div>
            </div>
            {
                comments?.map((comment, index) => <div key={'div' + index}>{comment.user.name + ': ' + comment.comment}</div>)
            }
            <Form onSubmit={handleSubmit}>
                <Form.Control className='my-3' as='textarea' rows={3} name='comment' placeholder='Comment' />
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
