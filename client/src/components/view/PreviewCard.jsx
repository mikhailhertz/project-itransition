import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { pathCollection } from 'paths'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function PreviewCard({ collectionId, img, title, description }) {
    return (
        <Card>
            {
                img &&
                <Link className='text-center bg-black' to={pathCollection + '/' + collectionId}>
                    <Card.Img className='item-image' variant='top' src={img} />
                </Link>
            }
            {
                !img &&
                <Link className='h4 text-center'to={pathCollection + '/' + collectionId}>
                    No preview
                </Link>
            }
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
            </Card.Body>
        </Card>
    )
}