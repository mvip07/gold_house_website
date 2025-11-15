import API from '../lib/axios'

export const certificateService = {
    getAll: async () => {
        const response = await API.get('/certificate/')
        return response.data.result
    },
    getById: async (id) => {
        const response = await API.get(`/certificate/${id}`)
        return response.data.result
    },
    create: async (certificate) => {
        await API.post('/certificate/', certificate)
    },
    update: async (id, certificate) => {
        await API.patch(`/certificate/${id}`, certificate)
    },
    delete: async (id) => {
        await API.delete(`/certificate/${id}`)
    },
}
