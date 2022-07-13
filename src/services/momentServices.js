import axios from "axios";


const baseUrl = "http://localhost:8080/moments/";

export const momentServices = {
    
    getAllMoments() {
        const moments = axios.get(baseUrl).then((res) => res.data);
        return moments;
    },

    createMoment(data) {
        console.log(data)
        const createdMoment = axios.post(baseUrl, {...data, userId:1}).then((res) => res.data);
        return createdMoment;
    },

    deleteMoment(id) {
        const deletedMoment = axios.delete(baseUrl + id).then((res) => res);
        return deletedMoment;
    },

    updateMoment(id, newMoment) {
        const updatedMoment = axios.put(baseUrl + id, {...newMoment, userId:1}).then((res) => res.data);
        return updatedMoment;
    },

    getMomentById(id) {
        const moment = axios.get(baseUrl + id).then((res) => res.data);
        return moment;
    },

    getBySearch(search) {
        const searched = axios.get(`${baseUrl}?search=${search}`).then((res) => res.data);
        return searched;
    },

};

