import API from '../lib/axios'

export const userService = {
    async getAll() {
        const res = await API.get('/api/user/')
        return res.data.result
    },
    async getById(id) {
        const res = await API.get(`/api/user/${id}`)
        return res.data.result
    },
    async create(data) {
        await API.post('/api/user/', data)
    },
    async update(id, data) {
        await API.patch(`/api/user/${id}`, data)
    },
    async delete(id) {
        await API.delete(`/api/user/${id}`)
    },
}