import axios from "axios";

const url = 'http://localhost:3000/'

const getPosts = () => {
    return axios.get(`${url}posts`);
}

const getOnePost = (id) => {
    return axios.get(`${url}posts/${id}`);
}

export default {
    getPosts,
    getOnePost
}