import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',  // Backend URL
    timeout: 5000,  // Timeout in milliseconds
});

export default instance;
