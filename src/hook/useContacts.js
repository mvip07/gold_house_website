'use client'
import { useState, useCallback, useEffect } from 'react'
import { contactService } from '../services/contactService'
import { notify } from '../lib/toastify'
import { handleApiError } from '../lib/helpers/handleApiError'

export const useContacts = () => {
    const [loading, setLoading] = useState(false)
    const [contacts, setContacts] = useState([])

    const fetchContacts = useCallback(async () => {
        setLoading(true)
        try {
            const data = await contactService.getAll()
            setContacts(data)
        } catch (err) {
            handleApiError(err, 'Contacts yuklashda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchContact = useCallback(async (id) => {
        setLoading(true)
        try {
            return await contactService.getById(id)
        } catch (err) {
            handleApiError(err, "Contact ma'lumotini yuklashda xatolik!")
        } finally {
            setLoading(false)
        }
    }, [])

    const handleCreate = useCallback(
        async (contact) => {
            setLoading(true)
            try {
                await contactService.create(contact)
                fetchContacts()
                notify('success', 'Contact yaratildi!')
            } catch (err) {
                handleApiError(err, 'Contact yaratishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchContacts]
    )

    const handleDelete = useCallback(
        async (id) => {
            setLoading(true)
            try {
                await contactService.delete(id)
                fetchContacts()
                notify('success', "Contact o'chirildi!")
            } catch (err) {
                handleApiError(err, "Contact o'chirishda xatolik!")
            } finally {
                setLoading(false)
            }
        },
        [fetchContacts]
    )

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    return {
        loading,
        contacts,
        fetchContact,
        handleCreate,
        handleDelete,
        fetchContacts,
    }
}

export const useContactsUser = () => {
    const [loading, setLoading] = useState(false)
    const handleCreate = useCallback(async (contact) => {
        setLoading(true)
        try {
            await contactService.create(contact)
            notify('success', 'Contactingiz yuborildi')
        } catch (err) {
            handleApiError(err, 'Contact yaratishda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        loading,
        handleCreate,
    }
}
