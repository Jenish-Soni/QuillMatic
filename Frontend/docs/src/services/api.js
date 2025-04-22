import axios from 'axios';
import Signup from '../components/Auth/Signup';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true, // Include credentials for cookie-based auth
});

// Add request interceptor to include token if needed
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const authService = {
    setAuthHeader(token) {
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    },

    removeAuthHeader() {
        delete api.defaults.headers.common['Authorization'];
    },

    async signup(username, password) {
        const response = await api.post('/auth/register', { username, password });
        return response.data;
    },

    async login(username, password) {
        const response = await api.post('/auth/login', { username, password });
        return response.data;
    },

    async checkAuth() {
        try {
            const response = await api.get('/auth/check-auth');
            return response.data;
        } catch (error) {
            if (error.response?.status === 403) {
                // Handle forbidden error
                localStorage.removeItem('token');
                throw new Error('Authentication failed');
            }
            throw error;
        }
    }
};

export const documentService = {
    create: async (title) => {
        const response = await api.post('/api/documents/create', { title });
        return response.data;
    },
    list: async () => {
        console.log('Listing documents...');
        const response = await api.get('/api/documents/list');
        console.log('Documents:', response.data);
        return response.data;
    },
    getDocument: async (id) => {
        const response = await api.get(`/api/documents/${id}`);
        return response.data;
    },
    updateTitle: async (id, title) => {
        const response = await api.patch(`/api/documents/${id}/title`, { title });
        return response.data;
    },
    updateContent: async (id, content) => {
        const response = await api.patch(`/api/documents/${id}/content`, { content });
        return response.data;
    }
};

export default api; 