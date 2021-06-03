import axios from 'axios';

const api = axios.create({
    baseURL: 'http://sistemavacinacaoaws-env.eba-rdekspm3.us-east-2.elasticbeanstalk.com/',
})

export default api;
