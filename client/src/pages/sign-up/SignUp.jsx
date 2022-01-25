import signIn from 'api/post/signIn'
import signUp from 'api/post/signUp'
import PasswordInput from 'components/form/PasswordInput'
import { pathSignIn } from 'paths'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const { t } = useTranslation()
    const handleSubmit = async event => {
        event.preventDefault()
        const { name, email, password } = event.target.elements
        try {
            await signUp(name.value, email.value, password.value)
            await signIn(email.value, password.value)
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <Container className='max-width-20 justify-content-center'>
            <Helmet>
                <title>{t('pageSignUp')}</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Control type='text' name='name' placeholder={t('uiName')} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Control type='email' name='email' placeholder={t('uiEmail')} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <PasswordInput />
                </Form.Group>
                <Nav.Link className='mb-3 p-0' as={Link} to={pathSignIn}>
                    {t('uiSignInPrompt')}
                </Nav.Link>
                <Button variant='primary' type='submit'>
                    {t('uiSignUp')}
                </Button>
            </Form>
        </Container>
    )
}
