import axios from 'axios';
const baseUrl = "http://localhost:8080";

export const authService={
    login(req){
        console.log(req)
        const auth = axios.post(`${baseUrl}/auth/login`, req)
        .then(res => {return res.data});
        return auth;
    },
    signup(req){
        console.log(req)
        const auth = axios.post(`${baseUrl}/auth/signup`, req)
        .then(res => {return res.data});
        return auth;
    }
}