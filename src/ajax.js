import axios from 'axios';

const baseURL = '';

const ajax = axios.create({
    baseURL
});

export default ajax;