import axios from "axios";
import { API } from "../../api/api";




// Create product
export const addProduct = (data) => API.post(`/shoes` , data);

// Get all products
export const getProducts = () => API.get("/shoes");

// Get single product
export const getProductById = (id) => API.get(`shoes/${id}`);

// Update product
export const updateProduct = (id, productData) => API.patch(`shoes/${id}`, productData);

// Delete product
export const deleteProduct = (id) => API.delete(`shoes/${id}`);