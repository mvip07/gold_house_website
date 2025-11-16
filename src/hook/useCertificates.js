import { useState, useCallback, useEffect } from 'react'
import { certificateService } from '../services/certificateService'
import { notify } from '../lib/toastify'
import { handleApiError } from '../lib/helpers/handleApiError'

export const useCertificates = () => {
    const [loading, setLoading] = useState(false)
    const [certificates, setCertificates] = useState([])

    const fetchCertificates = useCallback(async () => {
        setLoading(true)
        try {
            const data = await certificateService.getAll()
            setCertificates(data)
        } catch (err) {
            handleApiError(err, 'Certificates yuklashda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchCertificate = useCallback(async (id) => {
        setLoading(true)
        try {
            return await certificateService.getById(id)
        } catch (err) {
            handleApiError(err, "Certificate ma'lumotini yuklashda xatolik!")
        } finally {
            setLoading(false)
        }
    }, [])

    const handleCreate = useCallback(
        async (certificate) => {
            setLoading(true)
            try {
                await certificateService.create(certificate)
                fetchCertificates()
                notify('success', 'Certificate yaratildi!')
            } catch (err) {
                handleApiError(err, 'Certificate yaratishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchCertificates]
    )

    const handleUpdate = useCallback(
        async (id, certificate) => {
            if (!id || !certificate) return
            setLoading(true)
            try {
                await certificateService.update(id, certificate)
                fetchCertificates()
                notify('success', 'Certificate yangilandi!')
            } catch (err) {
                handleApiError(err, 'Certificate yangilashda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchCertificates]
    )

    const handleDelete = useCallback(
        async (id) => {
            setLoading(true)
            try {
                await certificateService.delete(id)
                fetchCertificates()
                notify('success', "Certificate o'chirildi!")
            } catch (err) {
                handleApiError(err, "Certificate o'chirishda xatolik!")
            } finally {
                setLoading(false)
            }
        },
        [fetchCertificates]
    )

    useEffect(() => {
        fetchCertificates()
    }, [fetchCertificates])

    return {
        loading,
        certificates,
        fetchCertificate,
        handleCreate,
        handleUpdate,
        handleDelete,
        fetchCertificates,
    }
}
