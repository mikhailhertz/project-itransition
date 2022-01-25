import PasswordInput from 'components/form/PasswordInput'
import { pathSignUp } from 'paths'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import signIn from 'api/post/signIn'

export default function SignIn() {
    const { t } = useTranslation()
    const handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await signIn(email.value, password.value)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <Container className='max-width-20 justify-content-center'>
            <Helmet>
                <title>{t('pageSignIn')}</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Control type='email' name='email' placeholder={t('uiEmail')} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <PasswordInput />
                </Form.Group>
                <Nav.Link className='mb-3 p-0' as={Link} to={pathSignUp}>
                    {t('uiSignUpPrompt')}
                </Nav.Link>
                <Button variant='primary' type='submit'>
                    {t('uiSignIn')}
                </Button>
            </Form>
        </Container>
    )
}
