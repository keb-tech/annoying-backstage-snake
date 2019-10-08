import axios from 'axios';

export default () => {
    let currentUser = JSON.parse(window.localStorage.currentUser);
    console.log(currentUser);
    return axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        withCredentials: false,
    })
    
}