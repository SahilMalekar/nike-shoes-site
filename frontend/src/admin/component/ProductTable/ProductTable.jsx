import React from "react";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableBody from "./ProductTableBody";

const ProductTable = ({ onEditClick, products, isLoading }) => {
  return (
    <div className="overflow-x-auto">
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <ProductTableHeader />
        <ProductTableBody
          onEditClick={onEditClick}
          products={products}
          isLoading={isLoading}
        />
      </table>
    </div>
  );
};

export default ProductTable;
