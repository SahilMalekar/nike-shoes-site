import React, { useEffect, useState } from "react";
import ProductTableRow from "./ProductTableRow";
import { getProducts } from "../../api/productApi";

const ProductTableBody = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async (data) => {
    setIsLoading(true);
    try {
      const res = await getProducts(data); // use consistent naming
      setProducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(
        "Add product error:",
        err.response?.data?.msg || err.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan="10" className="text-center py-4">
            Loading products...
          </td>
        </tr>
      </tbody>
    );
  }

  if (!products?.length) {
    return (
      <tbody>
        <tr>
          <td colSpan="10" className="text-center py-4">
            No products found
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {products.map((product) => (
        <ProductTableRow key={product._id} product={product} />
      ))}
    </tbody>
  );
};

export default ProductTableBody;
