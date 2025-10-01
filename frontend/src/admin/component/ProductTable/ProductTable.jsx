import React from "react";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableBody from "./ProductTableBody";

const ProductTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <ProductTableHeader />
        <ProductTableBody />
      </table>
    </div>
  );
};

export default ProductTable;
