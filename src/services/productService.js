import API from '../lib/axios'

export const productService = {
    getAll: async () => {
        const response = await API.get("/product/")
        return response.data.result
    },
    getById: async (id) => {
        const response = await API.get(`/product/${id}`)
        return response.data.result
    },
    create: async (product) => {
        const res = await API.post("/product/", product)
        return res.data.result
    },
    update: async (id, product) => {
        await API.patch(`/product/${id}`, product)
    },
    delete: async (id) => {
        await API.delete(`/product/${id}`)
    },
}
