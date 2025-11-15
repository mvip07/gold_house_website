import API from '../lib/axios';

export const languageService = {
    async getAll() {
        const res = await API.get('/api/language/');
        return res.data.result;
    },
    async getById(id) {
        const res = await API.get(`/api/language/${id}`);
        return res.data.result;
    },
    async create(data) {
        await API.post('/api/language/', data);
    },
    async update(id, data) {
        await API.patch(`/api/language/${id}`, data);
    },
    async delete(id) {
        await API.delete(`/api/language/${id}`);
    },
    async getUserLanguage(lang, code) {
        const res = await API.get(`/api/language/user/${lang}/${code}`);
        return res.data.result;
    },
};