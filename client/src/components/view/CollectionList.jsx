import PreviewCard from 'components/view/PreviewCard'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useTranslation } from 'react-i18next'

export default function CollectionList({ collections }) {
    const { t } = useTranslation()
    return (
        <Container fluid>
            <Row xs={1} md={2} lg={3} xxl={4} className='g-4'>
                {
                    collections.map((item, i) =>
                        <Col>
                            <PreviewCard img={item.preview} collectionId={item._id} title={item.title} description={item.description} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
