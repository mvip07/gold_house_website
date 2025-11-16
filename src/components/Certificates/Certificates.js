'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useModal } from '../UI/Modal'
import { fadeUp, staggeredList } from '../../lib/motion'
import { useCertificates } from '../../hook/useCertificates'
import { CreateCertificateModal, EditCertificateModal, DeleteCertificateModal, ViewCertificateModal } from './modal'

export default function Certificates() {
    const { loading, certificates, fetchCertificate, handleCreate, handleUpdate, handleDelete } = useCertificates()
    const { openModal, closeModal } = useModal()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredCertificates = useMemo(() => {
        if (!searchTerm.trim()) return certificates
        return certificates?.filter((certificate) => certificate.title.toLowerCase().includes(searchTerm.toLowerCase()) || certificate.description.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [certificates, searchTerm])

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'certificateCreate',
            title: 'Create Certificate',
            btnTitle: 'Create',
            content: <CreateCertificateModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenEdit = (id) => {
        openModal({
            type: 'EDIT',
            formId: 'certificateEdit',
            title: 'Edit Certificate',
            btnTitle: 'Update',
            content: <EditCertificateModal id={id} closeModal={closeModal} fetchCertificate={fetchCertificate} handleUpdate={handleUpdate} />,
        })
    }

    const handleOpenView = (id) => {
        openModal({
            type: 'VIEW',
            title: 'View Certificate',
            btnTitle: 'Close',
            content: <ViewCertificateModal id={id} closeModal={closeModal} fetchCertificate={fetchCertificate} />,
        })
    }

    const handleOpenDelete = (id) => {
        openModal({
            type: 'DELETE',
            formId: 'certificateDelete',
            title: 'Delete Certificate',
            btnTitle: 'Delete',
            content: <DeleteCertificateModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-6">
            {loading ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white/80">Loading certificates...</p>
                    </div>
                </motion.div>
            ) : certificates.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl shadow-lg mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No certificates found</h3>
                    <p className="text-white/60 mb-6">Add the first certificate to showcase achievements</p>
                    <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                        Add First Certificate
                    </motion.button>
                </motion.div>
            ) : (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Certificates Management</h3>
                            <p className="text-white/60">Manage your certificates and achievements</p>
                        </div>
                        <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2">
                            <span>Add Certificate</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </motion.button>
                    </div>

                    <div className="p-6 border-b border-white/10">
                        <div className="relative">
                            <input type="text" placeholder="Search certificates by title or description..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all duration-300" />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {filteredCertificates.map((certificate) => (
                            <motion.div key={certificate.id} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-white group-hover:text-yellow-300 transition-colors truncate">{certificate.title}</h4>
                                        <p className="text-white/60 text-sm">Certificate</p>
                                    </div>
                                </div>

                                <p className="text-white/70 text-sm mb-4 line-clamp-3">{certificate.description}</p>

                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <motion.button onClick={() => handleOpenView(certificate.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span>View</span>
                                    </motion.button>
                                    <motion.button onClick={() => handleOpenEdit(certificate.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        <span>Edit</span>
                                    </motion.button>
                                    <motion.button onClick={() => handleOpenDelete(certificate.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
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
