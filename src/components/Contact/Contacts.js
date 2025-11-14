'use client'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { useModal } from '../UI/Modal'
import { useContacts } from '../../hook/useContacts'
import { CreateContactModal, ViewContactModal, DeleteContactModal } from './modal'
import { fadeUp, staggeredList } from '../../lib/motion'

export default function Contacts() {
    const { loading, contacts, fetchContact, handleCreate, handleDelete } = useContacts()
    const { openModal, closeModal } = useModal()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredContacts = useMemo(() => {
        if (!searchTerm.trim()) return contacts
        return contacts.filter((contact) => contact.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || contact.phone_number.toLowerCase().includes(searchTerm.toLowerCase()) || contact.subject.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [contacts, searchTerm])

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'contactCreate',
            title: 'Create Contact',
            btnTitle: 'Create',
            content: <CreateContactModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenView = (id) => {
        openModal({
            type: 'VIEW',
            title: 'View Contact',
            btnTitle: 'Close',
            content: <ViewContactModal id={id} closeModal={closeModal} fetchContact={fetchContact} />,
        })
    }

    const handleOpenDelete = (id) => {
        openModal({
            type: 'DELETE',
            formId: 'contactDelete',
            title: 'Delete Contact',
            btnTitle: 'Delete',
            content: <DeleteContactModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-6">
            {loading ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white/80">Loading contacts...</p>
                    </div>
                </motion.div>
            ) : contacts.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No contacts found</h3>
                    <p className="text-white/60 mb-6">No contact messages have been received yet</p>
                    <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                        Create Contact
                    </motion.button>
                </motion.div>
            ) : (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Contact Messages</h3>
                            <p className="text-white/60">Manage customer inquiries and messages</p>
                        </div>
                        <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2">
                            <span>Create Contact</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </motion.button>
                    </div>

                    <div className="p-6 border-b border-white/10">
                        <div className="relative">
                            <input type="text" placeholder="Search contacts by name, phone, or subject..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all duration-300" />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {filteredContacts.map((contact) => (
                            <motion.div key={contact.id} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">{contact.full_name.charAt(0).toUpperCase()}</div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-white group-hover:text-orange-300 transition-colors truncate">{contact.full_name}</h4>
                                        <p className="text-white/60 text-sm truncate">{contact.phone_number}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div>
                                        <p className="text-xs text-white/50 mb-1">Subject</p>
                                        <p className="text-white/80 text-sm font-medium line-clamp-2">{contact.subject}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/50 mb-1">Message</p>
                                        <p className="text-white/70 text-sm line-clamp-3">{contact.message}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <motion.button onClick={() => handleOpenView(contact.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span>View</span>
                                    </motion.button>
                                    <motion.button onClick={() => handleOpenDelete(contact.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <span>Delete</span>
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
