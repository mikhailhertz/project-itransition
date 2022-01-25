import getUsers from 'api/get/getUsers'
import blockUser from 'api/post/blockUser'
import unblockUser from 'api/post/unblockUser'
import { pathProfile } from 'paths'
import { AuthenticationContext } from 'providers/AuthenticationProvider'
import { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Admin() {
    const { t } = useTranslation()
    const [users, setUsers] = useState(null)
    const [counter, setCounter] = useState(0)
    const { token } = useContext(AuthenticationContext)
    useEffect(() => {
        getUsers().then(result => setUsers(new Map(result.map(user => [user._id, { name: user.name, admin: user.admin, blocked: user.blocked }]))))
    }, [])
    const clickHandler = id => {
        var user = users.get(id)
        user.blocked ? unblockUser(id) : blockUser(id)
        user.blocked = !user.blocked
        setCounter(counter + 1)
    }
    var elements = []
    users?.forEach((properties, id) => {
        if (token.uid !== id) {
            elements.push(
                <ListGroup.Item className='d-flex py-3 justify-content-between align-items-center' key={id}>
                    <div>
                        <Link to={pathProfile + '/' + id} className='fw-bold h5'>{properties.name}</Link>
                        <div className='text-muted'>{id}</div>
                    </div>
                    <div>
                        <Button
                            className='ms-3 float-end bottom-margin-on-break top-margin-on-break'
                            variant={properties.blocked ? 'primary' : 'danger'}
                            onClick={event => clickHandler(id)}>
                            {properties.blocked ? t('uiUnblock') : t('uiBlock')}
                        </Button>
                        <Button
                            className='ms-3 float-end bottom-margin-on-break top-margin-on-break'
                            variant={properties.admin ? 'danger' : 'primary'}
                            onClick={event => clickHandler(id)}>
                            {properties.admin ? t('uiRevokeAdmin') : t('uiMakeAdmin')}
                        </Button>
                    </div>
                </ListGroup.Item>
            )
        }
    })
    return (
        <Container>
            <Helmet>
                <title>{t('pageAdmin')}</title>
            </Helmet>
            <ListGroup>
                {elements}
            </ListGroup>
        </Container>
    )
}
