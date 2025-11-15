import { useMemo, useContext } from 'react'
import { useLanguages } from './useLanguages'
import { LanguageContext } from '../context/LanguageContext'

export const useTranslations = (config) => {
    const { languages } = useLanguages()
    const { language } = useContext(LanguageContext)

    const textMap = useMemo(() => {
        if (!languages || !Array.isArray(languages)) {
            return config.reduce((acc, { code, default: def }) => {
                acc[code] = def || '...'
                return acc
            }, {})
        }

        const dictionary = languages.reduce((acc, item) => {
            if (!acc[item.code]) acc[item.code] = {}
            acc[item.code][item.lang] = item.message
            return acc
        }, {})

        return config.reduce((acc, { code, default: def }) => {
            acc[code] = dictionary[code]?.[language] || dictionary[code]?.['EN'] || def || '...'
            return acc
        }, {})
    }, [languages, language, config])

    return textMap
}
