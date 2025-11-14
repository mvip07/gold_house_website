import API from '../lib/axios'

export const certificateService = {
    getAll: async () => {
        const response = await API.get('/api/certificate/')
        return response.data.result
    },
    getById: async (id) => {
        const response = await API.get(`/api/certificate/${id}`)
        return response.data.result
    },
    create: async (certificate) => {
        await API.post('/api/certificate/', certificate)
    },
    update: async (id, certificate) => {
        await API.patch(`/api/certificate/${id}`, certificate)
    },
    delete: async (id) => {
        await API.delete(`/api/certificate/${id}`)
    },
}
