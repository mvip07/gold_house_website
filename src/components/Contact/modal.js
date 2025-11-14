'use client'
import { useState, useEffect } from 'react'

export const CreateContactModal = ({ closeModal, handleCreate }) => {
    const [formData, setFormData] = useState({ full_name: '', message: '', phone_number: '', subject: '' })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="contactCreate"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter full name" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" required value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter phone number" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter subject" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter message" />
            </div>
        </form>
    )
}

export const ViewContactModal = ({ id, closeModal, fetchContact }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchContact(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchContact, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.full_name}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.phone_number}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.subject}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.message}</p>
            </div>
        </div>
    )
}

export const DeleteContactModal = ({ id, closeModal, handleDelete }) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center space-y-4"
            id="contactDelete"
        >
            <h3 className="text-xl font-bold">Delete Contact</h3>
            <p>Are you sure? This action cannot be undone.</p>
        </form>
    )
}
