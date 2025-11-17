import API from '../lib/axios'

export const contactService = {
    getAll: async () => {
        const response = await API.get("/api/contact/")
        return response.data.result
    },
    getById: async (id) => {
        const response = await API.get(`/api/contact/${id}`)
        return response.data.result
    },
    create: async (contact) => {
        const response = await API.post("/api/contact/", contact)
        return response.data
    },
    delete: async (id) => {
        await API.delete(`/api/contact/${id}`)
    },
}
