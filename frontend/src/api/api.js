import axios from "axios";

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product:", error.message);
    throw error;
  }
};
