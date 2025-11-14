import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'UZ')

    useEffect(() => {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'UZ')
        }
    }, [])

    const changeLanguage = (newLang) => {
        localStorage.setItem('lang', newLang)
        setLanguage(newLang)
    }

    return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
}
