'use client'
import { motion } from 'framer-motion'
import { useLanguages } from '../../hook/useLanguages'
import { useModal } from '../UI/Modal'
import { CreateLanguageModal, EditLanguageModal, DeleteLanguageModal } from './modals'
import { useMemo, useState } from 'react'

const fadeUp = { hidden: { opacity: 1, y: 20 }, visible: { opacity: 1, y: 0 } }
const staggeredList = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }

export default function Languages() {
    const { loading, languages, fetchLanguage, handleCreate, handleUpdate, handleDelete } = useLanguages()
    const { openModal, closeModal } = useModal()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredLanguages = useMemo(() => {
        if (!searchTerm.trim()) return languages
        return languages.filter((lang) => lang.code.toLowerCase().includes(searchTerm.toLowerCase()) || lang.lang.toLowerCase().includes(searchTerm.toLowerCase()) || lang.message.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [languages, searchTerm])

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'languageCreate',
            title: 'Create Language',
            btnTitle: 'Create',
            content: <CreateLanguageModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenEdit = (id) => {
        openModal({
            type: 'EDIT',
            formId: 'languageEdit',
            title: 'Edit Language',
            btnTitle: 'Update',
            content: <EditLanguageModal id={id} closeModal={closeModal} fetchLanguage={fetchLanguage} handleUpdate={handleUpdate} />,
        })
    }

    const handleOpenDelete = (id) => {
        openModal({
            type: 'DELETE',
            formId: 'languageDelete',
            title: 'Delete Language',
            btnTitle: 'Delete',
            content: <DeleteLanguageModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-6">
            {loading ? (
                <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-md">
                    <div className="text-center">
                        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <p>Loading languages...</p>
                    </div>
                </div>
            ) : languages.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-2">No languages found</h3>
                    <p className="mb-4">Add the first language</p>
                    <button onClick={handleOpenCreate} className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-md hover:from-green-600 hover:to-teal-600">
                        Add Language
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Languages</h3>
                        <button onClick={handleOpenCreate} className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            Add Language
                        </button>
                    </div>
                    <div className="p-4 border-b">
                        <input type="text" placeholder="Search languages..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 ring-green-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {filteredLanguages.map((lang, index) => (
                            <motion.div key={index} variants={fadeUp} className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-medium">
                                    {lang.code} - {lang.lang}
                                </h4>
                                <p className="text-sm text-gray-600">{lang.message}</p>
                                <p className="text-sm text-gray-600">Created at: {lang.created_at}</p>
                                <div className="mt-3 flex gap-2">
                                    <button onClick={() => handleOpenEdit(lang.id)} className="text-green-600 hover:text-green-800">
                                        Edit
                                    </button>
                                    <button onClick={() => handleOpenDelete(lang.id)} className="text-red-600 hover:text-red-800">
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
