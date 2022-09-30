import axios from "axios";

export default {
    getUser() {
        return axios.get("/api/user");
    },
    async registerUser(payload) {
        await axios.get("/sanctum/csrf-cookie");
        return axios.post("/register", payload);
    },
    async login(payload) {
        await axios.get("/sanctum/csrf-cookie");
        return axios.post("/login", payload);
    },
    logout() {
        return axios.post("/logout");
    },
    updateUser(payload) {
        return axios.put("/user/profile-information", payload);
    },
    async forgotPassword(payload) {
        await axios.get("/sanctum/csrf-cookie");
        return axios.post("/forgot-password", payload);
    },
    async resetPassword(payload) {
        await axios.get("/sanctum/csrf-cookie");
        return axios.post("/reset-password", payload);
    },
};
