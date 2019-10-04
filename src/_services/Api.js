import axios from 'axios';

export default () => {
    let currentUser = JSON.parse(window.localStorage.currentUser);
    return axios.create({
        baseURL: 'http://localhost:8000/api',
        withCredentials: false,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}