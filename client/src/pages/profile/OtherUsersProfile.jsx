import getUser from 'api/get/getUser'
import { pathProfile } from 'paths'
import { AuthenticationContext } from 'providers/AuthenticationProvider'
import { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'
import fetchUsersCollections from 'api/get/getUsersCollections'

export default function OtherUsersProfile() {
    const { t } = useTranslation()
    const { userId } = useParams()
    const [userData, setUserData] = useState(null)
    const { token } = useContext(AuthenticationContext)
    useEffect(() => {
        getUser(userId).then(result => setUserData(result))
        fetchUsersCollections(userId)
    }, [userId])
    if (userData == null) {
        return <></>
    }
    if (userId === token.uid) {
        return <Navigate to={pathProfile} replace={true} />
    }
    if (userData.id === 404) {
        return (
            <Container fluid>
                <Helmet>
                    <title>{t('uiUserNotFound')}</title>
                </Helmet>
                <div className='h1'>{t('uiUserNotFound')}</div>
            </Container>
        )
    }
    return (
        <Container fluid>
            <Helmet>
                <title>{userData.name}</title>
            </Helmet>
            <div className='h4 mb-3'>
                {t('uiOtherUsersCollections', { username: userData.name })}
            </div>
        </Container>
    )
}
