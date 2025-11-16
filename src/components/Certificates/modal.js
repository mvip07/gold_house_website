import { useState, useEffect } from 'react'
import { FileUploader } from '../UploadImageFirebase'

export const CreateCertificateModal = ({ closeModal, handleCreate }) => {
    const [formData, setFormData] = useState({ title: '', description: '', file_path: '' })

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="certificateCreate"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter title" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter description" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File Path</label>
                <FileUploader folder="certificates" type="pdf" fileUrl={formData.file_path} onChange={(url) => setFormData({ ...formData, file_path: url })} />
            </div>
        </form>
    )
}

export const EditCertificateModal = ({ id, closeModal, fetchCertificate, handleUpdate }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchCertificate(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchCertificate, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleUpdate(id, formData)
                closeModal()
            }}
            id="certificateEdit"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter title" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter description" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File Path</label>
                <FileUploader folder="certificates" type="pdf" fileUrl={formData.file_path} onChange={(url) => setFormData({ ...formData, file_path: url })} />
            </div>
        </form>
    )
}

export const DeleteCertificateModal = ({ id, closeModal, handleDelete }) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center space-y-4"
            id="certificateDelete"
        >
            <h3 className="text-xl font-bold">Delete Certificate</h3>
            <p>Are you sure? This action cannot be undone.</p>
        </form>
    )
}

export const ViewCertificateModal = ({ id, closeModal, fetchCertificate }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchCertificate(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchCertificate, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.title}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <p className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100">{formData.description}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">File Path</label>
                {formData.file_path && <iframe src={formData.file_path} className="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity border-none" title={formData.title} loading="lazy"></iframe>}
            </div>
        </div>
    )
}
