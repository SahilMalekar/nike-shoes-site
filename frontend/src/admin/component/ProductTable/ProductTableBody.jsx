import React, { useEffect, useState } from "react";
import ProductTableRow from "./ProductTableRow";
import { getProducts } from "../../api/productApi";

const ProductTableBody = ({ onEditClick, products, isLoading }) => {
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
        <ProductTableRow
          key={product._id}
          product={product}
          onEditClick={onEditClick}
        />
      ))}
    </tbody>
  );
};

export default ProductTableBody;
