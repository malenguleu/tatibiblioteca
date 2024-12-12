import axios from 'axios'; // importa Axios para requisições HTTP
 
// Cria instância do Axios com URL base da API
const apiClient = axios.create({
    baseURL: 'http://localhost:6000/api/', // URL da API
});
 
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
});
 
export default apiClient;