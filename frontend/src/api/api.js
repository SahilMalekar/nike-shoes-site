import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

// export const getProductById = async (id) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/api/products/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch product:", error.message);
//     throw error;
//   }
// };

export const getProductById = (id) => API.get(`/products/${id}`);

export const getProducts = () => API.get(`/products`);
