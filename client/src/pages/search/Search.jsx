import CollectionList from 'components/view/CollectionList'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

export default function Search() {
    const { t } = useTranslation()
    const { state } = useLocation();
    return (
        <Container fluid>
            <Helmet>
                <title>{t('pageHome')}</title>
            </Helmet>
            <CollectionList collections={state} />
        </Container>
    )
}
