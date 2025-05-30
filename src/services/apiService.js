import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8080/api', 
});


apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiService;
