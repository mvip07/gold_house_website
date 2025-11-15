import API from '../lib/axios'

export const userService = {
    async getAll() {
        const res = await API.get('/user/')
        return res.data.result
    },
    async getById(id) {
        const res = await API.get(`/user/${id}`)
        return res.data.result
    },
    async create(data) {
        await API.post('/user/', data)
    },
    async update(id, data) {
        await API.patch(`/user/${id}`, data)
    },
    async delete(id) {
        await API.delete(`/user/${id}`)
    },
}