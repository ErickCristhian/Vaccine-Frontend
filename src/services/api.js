import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sistema-vacinacao.herokuapp.com/',
})

export default api;
