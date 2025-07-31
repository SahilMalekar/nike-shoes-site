import axios from "axios";

const API = axios.create({
    baseURL: "/api"
})


export const signupUser = (userData) => API.post("/auth/signup", userData)

export const signinUser = (userData) => API.post("/auth/signin", userData)
