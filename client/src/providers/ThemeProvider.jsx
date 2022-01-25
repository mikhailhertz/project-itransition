import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') ?? 'light')
    useEffect(() => {
        if (theme !== 'light' && theme !== 'dark') {
            throw new Error('Invalid theme')
        }
        window.localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
