import axios from "axios";

const url = 'http://localhost:3000/'

const putPost = (post) => {
    return axios.put(`${url}posts/${post.id}`,post);
}

export default {
    putPost,
}