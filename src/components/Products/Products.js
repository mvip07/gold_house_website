'use client'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useModal } from '../UI/Modal'
import { useProducts } from '../../hook/useProducts'
import { fadeUp, staggeredList } from '../../lib/motion'
import { CreateProductModal, EditProductModal, DeleteProductModal } from './modal'

export default function Products() {
    const { loading, products, fetchProduct, handleCreate, handleUpdate, handleDelete } = useProducts()
    const { openModal, closeModal } = useModal()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = useMemo(() => {
        if (!searchTerm.trim()) return products
        return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [products, searchTerm])

    const handleOpenCreate = () => {
        openModal({
            type: 'CREATE',
            formId: 'productCreate',
            title: 'Create Product',
            btnTitle: 'Create',
            content: <CreateProductModal closeModal={closeModal} handleCreate={handleCreate} />,
        })
    }

    const handleOpenEdit = (id) => {
        openModal({
            type: 'EDIT',
            formId: 'productEdit',
            title: 'Edit Product',
            btnTitle: 'Update',
            content: <EditProductModal id={id} closeModal={closeModal} fetchProduct={fetchProduct} handleUpdate={handleUpdate} />,
        })
    }

    const handleOpenDelete = (id) => {
        openModal({
            type: 'DELETE',
            formId: 'productDelete',
            title: 'Delete Product',
            btnTitle: 'Delete',
            content: <DeleteProductModal id={id} closeModal={closeModal} handleDelete={handleDelete} />,
        })
    }

    return (
        <motion.div variants={staggeredList} initial="hidden" animate="visible" className="space-y-6">
            {loading ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-64 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white/80">Loading products...</p>
                    </div>
                </motion.div>
            ) : products.length === 0 ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                    <p className="text-white/60 mb-6">Add the first product to get started</p>
                    <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
                        Add First Product
                    </motion.button>
                </motion.div>
            ) : (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white">Products Management</h3>
                            <p className="text-white/60">Manage your product catalog and inventory</p>
                        </div>
                        <motion.button onClick={handleOpenCreate} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2">
                            <span>Add Product</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </motion.button>
                    </div>

                    <div className="p-6 border-b border-white/10">
                        <div className="relative">
                            <input type="text" placeholder="Search products by name or title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent transition-all duration-300" />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {filteredProducts.map((product) => (
                            <motion.div key={product.id} variants={fadeUp} whileHover={{ scale: 1.02, y: -5 }} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img src={product.image_path} alt={product.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h4 className="font-bold text-white text-lg mb-1">{product.title}</h4>
                                        <p className="text-white/80 text-sm line-clamp-2">{product.description}</p>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="text-center p-2 bg-white/5 rounded-xl">
                                            <p className="text-xs text-white/60">Weight</p>
                                            <p className="text-white font-semibold">{product.gramm}g</p>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-xl">
                                            <p className="text-xs text-white/60">Quality</p>
                                            <p className="text-white font-semibold">{product.proba}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-3 border-t border-white/10">
                                        <motion.button onClick={() => handleOpenEdit(product.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <span>Edit</span>
                                        </motion.button>
                                        <motion.button onClick={() => handleOpenDelete(product.id)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span>Delete</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}
