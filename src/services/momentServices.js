import axios from "axios";

const baseUrl = "http://localhost:8080/moments";

export const momentServices = {
    
    getAllMoments() {
        const moments = axios.get(baseUrl).then((res) => res.data);
        return moments;
    },

    addMoment(data) {
        const addedMoment = axios.post(baseUrl, data).then((res) => res.data);
        return addedMoment;
    },

};

