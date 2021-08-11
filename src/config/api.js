import axios from 'axios';

const server = axios.create({
    baseURL: 'https://wishfully-server.herokuapp.com'
})

server.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    console.log("Set token header:", token);
    if(token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})

export default server;