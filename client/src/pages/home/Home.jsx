import getAllCollections from 'api/get/getAllCollections'
import getPopularTags from 'api/get/getPopularTags'
import CollectionList from 'components/view/CollectionList'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import getCollectionsByTag from 'api/get/getCollectionsByTag'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [collections, setCollections] = useState([])
    const [popularTags, setPopularTags] = useState([])
    useEffect(() => {
        getAllCollections().then(result => setCollections(result))
        getPopularTags().then(result => setPopularTags(result))
    }, [])
    const handleClick = async tag => {
        const collections = await getCollectionsByTag(tag)
        navigate('/search', { state: collections })
    }
    return (
        <Container fluid>
            <Helmet>
                <title>{t('pageHome')}</title>
            </Helmet>
            <div className='d-flex mb-3 align-items-center'>
                <div className='h5 me-2'>{t('uiPopularTags')}</div>
                {
                    popularTags?.map(tag => <Button onClick={event => handleClick(tag.tag)} className='me-2'>{tag.tag}</Button>)
                }
            </div>
            <CollectionList collections={collections} />
        </Container>
    )
}
