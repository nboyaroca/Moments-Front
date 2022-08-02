import axios from "axios";

const baseUrl = "http://localhost:8080";

export const likeServices = {

    getAllLikes() {
        const likes = axios.get(baseUrl + "/likes").then((res) => res.data);
        return likes;
    },
   
    getLikesByMomentId(id) {
        const likes = axios.get(baseUrl + "/moments/" + id + "/likes").then((res) => res.data);
        return likes;
    },

    createLike(id) {
        const like = axios.post(`${baseUrl}/likes`, {momentId: id, userId: 1}).then((res) => res.data);
        return like;
    },

}