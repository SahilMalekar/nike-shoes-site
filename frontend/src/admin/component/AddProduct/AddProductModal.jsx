import React, { useState } from "react";
import ProductForm from "./ProductForm";

const AddProductModal = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    size: [],
    images: [],
    description: "",
    stock: "",
  });

  // Local state for handling image input
  const [imageUrl, setImageUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data back to parent
    onSubmit(formData);
    // reset form
    setFormData({
      name: "",
      brand: "",
      price: "",
      size: [],
      images: [],
      description: "",
      stock: "",
    });
    setImageUrl("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative p-4 w-full max-w-3xl bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 mb-4 border-b dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add Product
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <ProductForm
          onClose={onClose}
          isSubmitting={isSubmitting}
          handleSubmit={handleSubmit}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default AddProductModal;
