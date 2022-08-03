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

    // toggleLike(data) {
    //     const like = axios.post(baseUrl + "/likes", data).then((res) => res.data);
    //     return like;
    // },

    toggleLike(id) {
        const like = axios.post(baseUrl + "/likes", {userId:2, momentId:id}).then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err)
            // alert("Err M-420 Publisher can't like his own moment")
        })
        return like;
    }

}