import { pathHome } from 'paths'
import { ThemeContext } from 'providers/ThemeProvider'
import { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageDropdown from './LanguageDropdown'
import ProfileButton from './ProfileButton'
import SearchBar from './SearchBar'
import ThemeButton from './ThemeButton'

export default function Header() {
    const { t } = useTranslation()
    const { theme } = useContext(ThemeContext)
    return (
        <Navbar collapseOnSelect expand='md' className='px-3 mb-3' bg={theme} variant={theme}>
            <Navbar.Brand as={Link} to={pathHome}>{t('siteTitle')}</Navbar.Brand>
            <SearchBar />
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <div className='d-flex justify-content-end ms-auto top-margin-on-break'>
                        <ThemeButton />
                        <LanguageDropdown />
                        <ProfileButton />
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}