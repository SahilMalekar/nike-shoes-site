import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const subscribe = (email) => API.post("/subscribe", email);
