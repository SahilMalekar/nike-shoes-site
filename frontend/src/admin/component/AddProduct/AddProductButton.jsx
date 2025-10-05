import React, { useState } from "react";
import AddProductModal from "./AddProductModal";
import { addProduct } from "../../api/productApi";
import { toast } from "sonner";

const AddProductButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await addProduct(data); // use consistent naming
      toast.success("Shoe added successfully!");
      console.log(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Adding product failed");
      console.error(
        "Add product error:",
        err.response?.data?.msg || err.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        <svg
          className="h-3.5 w-3.5 mr-1.5 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          />
        </svg>
        Add product
      </button>

      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleOnSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AddProductButton;
