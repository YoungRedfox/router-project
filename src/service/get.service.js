import axios from "axios";

const url = 'http://localhost:3000/'

const getPosts = () => {
    return axios.get(`${url}posts`);
}

export default {
    getPosts,
}