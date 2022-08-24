import axios from "axios";
import { AuthUtils } from "./localAuthService";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = AuthUtils.getAuthUser().token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


// const baseUrl = "http://localhost:8080/moments/"; abans ho ficavem dins de axios.get(baseUrl)

export const momentServices = {
    
    getAllMoments() {
        const moments = axios.get("/moments").then((res) => res.data);
        return moments;
    },

    createMoment(data) {
        console.log(data)
        const createdMoment = axios.post("/moments", {...data, userId:1}).then((res) => res.data);
        return createdMoment;
    },

    deleteMoment(id) {
        const deletedMoment = axios.delete("/moments/" + id).then((res) => res);
        return deletedMoment;
    },

    updateMoment(id, newMoment) {
        const updatedMoment = axios.put("/moments/" + id, {...newMoment, userId:1}).then((res) => res.data);
        return updatedMoment;
    },

    getMomentById(id) {
        const moment = axios.get("/moments/" + id).then((res) => res.data);
        return moment;
    },

    getBySearch(search) {
        const searched = axios.get(`/moments?search=${search}`).then((res) => res.data);
        return searched;
    },

};

// ATENCIÓ: Quan tinguem més d'un usuari caldrà canviar el "userId: 1" per logged user