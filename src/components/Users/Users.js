'use client'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useModal } from '../UI/Modal'
import { useUsers } from '../../hook/useUsers'
import { CreateUserModal, EditUserModal, DeleteUserModal } from './modals'

const fadeUp = { hidden: { opacity: 1, y: 20 }, visible: { opacity: 1, y: 0 } }
const staggeredList = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

export default function Users() {
    const { loading, users, fetchUser, handleCreate, handleUpdate, handleDelete } = useUsers()
    const { openModal, closeModal } = useModal()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredUsers = useMemo(() => {
        if (!searchTerm.trim()) return users
        return users.filter((user) => user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || user.username.toLowerCase().includes(searchTerm.toLowerCase()) || (user.phone_number || '').toLowerCase().includes(searchTerm.toLowerCase()))
    }, [users, searchTerm])

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'userCreate',
            title: 'Create User',
            btnTitle: 'Create',
            content: <CreateUserModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenEdit = (id) => {
        openModal({
            type: 'EDIT',
            formId: 'userEdit',
            title: 'Edit User',
            btnTitle: 'Update',
            content: <EditUserModal id={id} closeModal={closeModal} fetchUser={fetchUser} handleUpdate={handleUpdate} />,
        })
    }

    const handleOpenDelete = (id) => {
        openModal({
            type: 'DELETE',
            formId: 'userDelete',
            title: 'Delete User',
            btnTitle: 'Delete',
            content: <DeleteUserModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-6">
            {loading ? (
                <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-md">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p>Loading users...</p>
                    </div>
                </div>
            ) : users.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">No users found</h3>
                    <p className="mb-4">Add the first user</p>
                    <button onClick={handleOpenCreate} className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600">
                        Add User
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Users</h3>
                        <button onClick={handleOpenCreate} className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Add User
                        </button>
                    </div>
                    <div className="p-4 border-b">
                        <input type="text" placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 ring-green-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {filteredUsers.map((user, index) => (
                            <motion.div key={index} variants={fadeUp} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-medium">{user.full_name}</h4>
                                <p className="text-sm text-gray-600">{user.username}</p>
                                <p className="text-sm text-gray-600">{user.phone_number}</p>
                                <div className="mt-3 flex gap-2">
                                    <button onClick={() => handleOpenEdit(user.id)} className="text-green-600 hover:text-green-800">
                                        Edit
                                    </button>
                                    <button onClick={() => handleOpenDelete(user.id)} className="text-red-600 hover:text-red-800">
                                        Delete
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}
