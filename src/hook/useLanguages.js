import { useState, useCallback, useEffect } from 'react'
import { languageService } from '../services/languageService'
import { handleApiError } from '../lib/helpers/handleApiError'
import { notify } from '../lib/toastify'

export const useLanguages = () => {
    const [loading, setLoading] = useState(false)
    const [languages, setLanguages] = useState([])

    const fetchLanguages = useCallback(async () => {
        setLoading(true)
        try {
            const data = await languageService.getAll()
            setLanguages(data)
        } catch (err) {
            handleApiError(err, 'Languages yuklashda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchLanguage = useCallback(async (id) => {
        setLoading(true)
        try {
            return await languageService.getById(id)
        } catch (err) {
            handleApiError(err, "Language ma'lumotini yuklashda xatolik!")
        } finally {
            setLoading(false)
        }
    }, [])

    const handleCreate = useCallback(
        async (language) => {
            setLoading(true)
            try {
                await languageService.create(language)
                fetchLanguages()
                notify('success', 'Language yaratildi!')
            } catch (err) {
                handleApiError(err, 'Language yaratishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchLanguages]
    )

    const handleUpdate = useCallback(
        async (id, language) => {
            if (!id || !language) return
            setLoading(true)
            try {
                await languageService.update(id, language)
                fetchLanguages()
                notify('success', 'Language yangilandi!')
            } catch (err) {
                handleApiError(err, 'Language yangilashda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchLanguages]
    )

    const handleDelete = useCallback(
        async (id) => {
            setLoading(true)
            try {
                await languageService.delete(id)
                fetchLanguages()
                notify('success', "Language o'chirildi!")
            } catch (err) {
                handleApiError(err, "Language o'chirishda xatolik!")
            } finally {
                setLoading(false)
            }
        },
        [fetchLanguages]
    )

    const getUserLanguage = useCallback(async (lang, code) => {
        setLoading(true)
        try {
            const res = await languageService.getUserLanguage(lang, code)
            return res.message
        } catch (err) {
            handleApiError(err, "Language o'chirishda xatolik!")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchLanguages()
    }, [fetchLanguages])

    return {
        loading,
        languages,
        fetchLanguage,
        handleCreate,
        handleUpdate,
        handleDelete,
        fetchLanguages,
        getUserLanguage,
    }
}
