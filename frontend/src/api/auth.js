import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export const signupUser = (userData) => API.post("/auth/signup", userData);

export const signinUser = (userData) => API.post("/auth/signin", userData);
