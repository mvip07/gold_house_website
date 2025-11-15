import API from '../lib/axios'

export const contactService = {
    getAll: async () => {
        const response = await API.get("/contact/")
        return response.data.result
    },
    getById: async (id) => {
        const response = await API.get(`/contact/${id}`)
        return response.data.result
    },
    create: async (contact) => {
        const response = await API.post("/contact/", contact)
        return response.data
    },
    delete: async (id) => {
        await API.delete(`/contact/${id}`)
    },
}
