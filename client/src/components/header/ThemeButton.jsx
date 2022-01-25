import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeContext } from 'providers/ThemeProvider'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'

export default function ThemeSwitch() {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleClick = event => setTheme(theme === 'light' ? 'dark' : 'light')
    var icon, color
    if (theme === 'light') {
        icon = faMoon
        color = 'black'
    } else {
        icon = faSun
        color = 'white'
    }
    return (
        <Button className='bg-transparent border-0 me-2' variant={theme} onClick={handleClick}><FontAwesomeIcon icon={icon} color={color} /></Button>
    )
}
