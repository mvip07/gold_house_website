'use client'
import { useState, useEffect } from 'react'
import { FileUploader } from '../UploadImageFirebase'

export const CreateProductModal = ({ closeModal, handleCreate }) => {
    const [formData, setFormData] = useState({ title: '', gramm: 0, proba: 0, description: '', type: '', image_path: '' })
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleCreate(formData)
                closeModal()
            }}
            id="productCreate"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter title" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gramm *</label>
                <input type="number" required value={formData.gramm} onChange={(e) => setFormData({ ...formData, gramm: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter gramm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">proba *</label>
                <input type="number" required value={formData.proba} onChange={(e) => setFormData({ ...formData, proba: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter proba" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                <input type="text" required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter type" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter description" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <FileUploader folder="products" type="image" fileUrl={formData.image_path} onChange={(url) => setFormData({ ...formData, image_path: url })} />
            </div>
        </form>
    )
}

export const EditProductModal = ({ id, closeModal, fetchProduct, handleUpdate }) => {
    const [formData, setFormData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            setIsFetching(true)
            const res = await fetchProduct(id)
            if (res) setFormData(res)
            setIsFetching(false)
        }
        loadData()
    }, [fetchProduct, id])

    if (isFetching || !formData) return <div className="text-center">Loading...</div>

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleUpdate(id, formData)
                closeModal()
            }}
            id="productEdit"
            className="space-y-6"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter title" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gramm *</label>
                <input type="number" required value={formData.gramm} onChange={(e) => setFormData({ ...formData, gramm: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter gramm" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">proba *</label>
                <input type="number" required value={formData.proba} onChange={(e) => setFormData({ ...formData, proba: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter proba" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                <input type="text" required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter type" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Enter description" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <FileUploader folder="products" type="image" fileUrl={formData.image_path} onChange={(url) => setFormData({ ...formData, image_path: url })} />
            </div>
        </form>
    )
}

export const DeleteProductModal = ({ id, closeModal, handleDelete }) => {
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault()
                await handleDelete(id)
                closeModal()
            }}
            className="text-center space-y-4"
            id="productDelete"
        >
            <h3 className="text-xl font-bold">Delete Product</h3>
            <p>Are you sure? This action cannot be undone.</p>
        </form>
    )
}
