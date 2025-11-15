import API from '../lib/axios';

export const languageService = {
    async getAll() {
        const res = await API.get('/language/');
        return res.data.result;
    },
    async getById(id) {
        const res = await API.get(`/language/${id}`);
        return res.data.result;
    },
    async create(data) {
        await API.post('/language/', data);
    },
    async update(id, data) {
        await API.patch(`/language/${id}`, data);
    },
    async delete(id) {
        await API.delete(`/language/${id}`);
    },
    async getUserLanguage(lang, code) {
        const res = await API.get(`/language/user/${lang}/${code}`);
        return res.data.result;
    },
};