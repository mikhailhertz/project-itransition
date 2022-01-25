import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useTranslation } from 'react-i18next'
import search from 'api/get/search'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const handleSubmit = async event => {
        event.preventDefault()
        const collections = await search(event.target.elements.search.value)
        event.target.elements.search.value = ''
        navigate('/search', { state: collections })
    }
    return (
        <Form className='d-flex me-auto' onSubmit={handleSubmit}>
            <FormControl
                className='me-2'
                type='search'
                name='search'
                placeholder={t('uiSearch')}
            />
            <Button type='submit'>
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </Form>
    )
}
