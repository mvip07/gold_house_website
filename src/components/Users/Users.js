'use client'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useModal } from '../UI/Modal'
import { useUsers } from '../../hook/useUsers'
import { CreateUserModal, EditUserModal, DeleteUserModal } from './modals'
import { fadeUp, staggeredList } from '../../lib/motion'

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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white/80">Loading users...</p>
                    </div>
                </motion.div>
            ) : users.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No users found</h3>
                    <p className="text-white/60 mb-6">Add the first user to get started</p>
                    <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                        Add First User
                    </motion.button>
                </motion.div>
            ) : (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Users Management</h3>
                            <p className="text-white/60">Manage your system users</p>
                        </div>
                        <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2">
                            <span>Add User</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </motion.button>
                    </div>

                    <div className="p-6 border-b border-white/10">
                        <div className="relative">
                            <input type="text" placeholder="Search users by name, username, or phone..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300" />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {filteredUsers.map((user) => (
                            <motion.div key={user.id} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">{user.full_name.charAt(0).toUpperCase()}</div>
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors">{user.full_name}</h4>
                                        <p className="text-white/60 text-sm">@{user.username}</p>
                                    </div>
                                </div>

                                {user.phone_number && (
                                    <p className="text-white/70 text-sm mb-4 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span>{user.phone_number}</span>
                                    </p>
                                )}

                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <motion.button onClick={() => handleOpenEdit(user.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 text-sm font-medium">
                                        Edit
                                    </motion.button>
                                    <motion.button onClick={() => handleOpenDelete(user.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-300 text-sm font-medium">
                                        Delete
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}
