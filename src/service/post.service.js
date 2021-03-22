import axios from "axios";

const url = 'http://localhost:3000/'

const postNewPost = (post) => {
    return axios.post(`${url}posts`,post);
}

export default {
    postNewPost,
}