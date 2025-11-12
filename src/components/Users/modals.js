'use client'
import { useEffect, useState } from 'react'

export const CreateUserModal = ({ closeModal, handleCreate }) => {
    const [formData, setFormData] = useState({ full_name: '', username: '', phone_number: '', password: '' })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="userCreate"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter full name" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                <input type="text" required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter username" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" required value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter phone number" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input type="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter password" />
            </div>
        </form>
    )
}

export const EditUserModal = ({ id, closeModal, fetchUser, handleUpdate }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchUser(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchUser, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleUpdate(id, formData)
                closeModal()
            }}
            id="userEdit"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter full name" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                <input type="text" required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter username" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" required value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter phone number" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter new password (optional)" />
            </div>
        </form>
    )
}

export const DeleteUserModal = ({ id, closeModal, handleDelete }) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center space-y-4"
            id="userDelete"
        >
            <h3 className="text-xl font-bold">Delete User</h3>
            <p>Are you sure? This action cannot be undone.</p>
        </form>
    )
}
