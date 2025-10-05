import React, { useState } from "react";
import UpdateProductForm from "./UpdateProductForm";

const UpdateProductDrawer = ({
  isOpen,
  onClose,
  product,
  onProductUpdated,
}) => {
  if (!isOpen) return null;
  return (
    <UpdateProductForm
      onClose={onClose}
      isOpen={isOpen}
      product={product}
      onProductUpdated={onProductUpdated}
    />
  );
};

export default UpdateProductDrawer;
