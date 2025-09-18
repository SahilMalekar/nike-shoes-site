import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});


export const getProductById = (id) => API.get(`/products/${id}`);

export const getProducts = () => API.get(`/products`);
