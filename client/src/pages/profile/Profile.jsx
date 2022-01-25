import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getUsersCollections from 'api/get/getUsersCollections'
import CollectionList from 'components/view/CollectionList'
import { pathAdmin, pathNewCollection } from 'paths'
import { AuthenticationContext } from 'providers/AuthenticationProvider'
import { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import firebase from 'utils/firebase'

export default function Profile() {
    const { t } = useTranslation()
    const { token, admin } = useContext(AuthenticationContext)
    const [collections, setCollections] = useState([])
    useEffect(() => {
        getUsersCollections(token.uid).then(result => setCollections(result))
    }, [token.uid])
    return (
        <Container fluid>
            <Helmet>
                <title>{t('pageProfile')}</title>
            </Helmet>
            <div className='h4 mb-3'>
                {t('uiUserGreeting', { username: token.displayName })}
                <Button className='mx-3' onClick={() => firebase.auth().signOut()}>
                    {t('uiSignOut')}
                </Button>
                {
                    admin &&
                    <Button as={Link} to={pathAdmin}>
                        {t('uiAdmin')}
                    </Button>
                }
            </div>
            <div>
                <div className='h5'>
                    {t('uiMyCollections')}
                    <Button className='bg-transparent border-0 ms-1' variant='success' as={Link} to={pathNewCollection}>
                        <FontAwesomeIcon icon={faPlus} color='green' />
                    </Button>
                </div>
            </div>
            <CollectionList collections={collections} />
        </Container>
    )
}
