import API from '../lib/axios'

export const authService = {
    async login(username, password) {
        const res = await API.post('/auth/login', { username, password })
        return res.data.result
    },
}
