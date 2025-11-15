import API from '../lib/axios'

export const authService = {
    async login(username, password) {
        const res = await API.post('/api/auth/login', { username, password })
        return res.data.result
    },
}
