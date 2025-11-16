'use client'
import { useState, useCallback, useEffect } from 'react'
import { productService } from '../services/productService'
import { notify } from '../lib/toastify'
import { handleApiError } from '../lib/helpers/handleApiError'

export const useProducts = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const fetchProducts = useCallback(async () => {
        setLoading(true)
        try {
            const data = await productService.getAll()
            setProducts(data)
        } catch (err) {
            handleApiError(err, 'Products yuklashda xatolik!')
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchProduct = useCallback(async (id) => {
        setLoading(true)
        try {
            return await productService.getById(id)
        } catch (err) {
            handleApiError(err, "Product ma'lumotini yuklashda xatolik!")
        } finally {
            setLoading(false)
        }
    }, [])

    const handleCreate = useCallback(
        async (product) => {
            setLoading(true)
            try {
                await productService.create(product)
                fetchProducts()
                notify('success', 'Product yaratildi!')
            } catch (err) {
                handleApiError(err, 'Product yaratishda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchProducts]
    )

    const handleUpdate = useCallback(
        async (id, product) => {
            if (!id || !product) return
            setLoading(true)
            try {
                await productService.update(id, product)
                fetchProducts()
                notify('success', 'Product yangilandi!')
            } catch (err) {
                handleApiError(err, 'Product yangilashda xatolik!')
            } finally {
                setLoading(false)
            }
        },
        [fetchProducts]
    )

    const handleDelete = useCallback(
        async (id) => {
            setLoading(true)
            try {
                await productService.delete(id)
                fetchProducts()
                notify('success',"Product o'chirildi!")
            } catch (err) {
                handleApiError(err, "Product o'chirishda xatolik!")
            } finally {
                setLoading(false)
            }
        },
        [fetchProducts]
    )

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return {
        loading,
        products,
        fetchProduct,
        handleCreate,
        handleUpdate,
        handleDelete,
        fetchProducts,
    }
}
