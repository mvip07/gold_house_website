'use client'
import { useEffect, useState } from 'react'

export const CreateLanguageModal = ({ closeModal, handleCreate }) => {
    const [formData, setFormData] = useState({ code: '', lang: '', message: '' })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="languageCreate"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Code *</label>
                <input type="text" required value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter code" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lang *</label>
                <input type="text" required value={formData.lang} onChange={(e) => setFormData({ ...formData, lang: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter lang" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <input type="text" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter message" />
            </div>
        </form>
    )
}

export const EditLanguageModal = ({ id, closeModal, fetchLanguage, handleUpdate }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchLanguage(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchLanguage, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleUpdate(id, formData)
                closeModal()
            }}
            id="languageEdit"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Code *</label>
                <input type="text" required value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter code" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lang *</label>
                <input type="text" required value={formData.lang} onChange={(e) => setFormData({ ...formData, lang: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter lang" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <input type="text" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter message" />
            </div>
        </form>
    )
}

export const DeleteLanguageModal = ({ id, closeModal, handleDelete }) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center space-y-4"
            id="languageDelete"
        >
            <h3 className="text-xl font-bold">Delete Language</h3>
            <p>Are you sure? This action cannot be undone.</p>
        </form>
    )
}
