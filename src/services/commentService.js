import axios from "axios";

const baseUrl = "http://localhost:8080";

export const commentServices = {

    getAllComments() {
        const comments = axios.get(baseUrl + "/comments").then((res) => res.data);
        return comments;
    },

    getCommentById(id) {
        const comment = axios.get(baseUrl + "/comments/" + id).then((res) => res.data);
        return comment;
    },

    getCommentsByMomentId(id) {
        const comments = axios.get(baseUrl + "/moments/" + id + "/comments").then((res) => res.data);
        return comments;
    }

}