import React from "react";

const ProductForm = ({
  handleSubmit,
  onClose,
  isSubmitting,
  imageUrl,
  formData,
  setFormData,
  setImageUrl,
}) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Product Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Type product name"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Brand
          </label>
          <input
            type="text"
            value={formData.brand}
            onChange={(e) =>
              setFormData({ ...formData, brand: e.target.value })
            }
            placeholder="Product brand"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            placeholder="2999"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Stock
          </label>
          <input
            type="number"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: Number(e.target.value) })
            }
            placeholder="100"
            required
            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Sizes */}
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sizes (comma separated)
          </label>
          <input
            type="text"
            placeholder="e.g. 7, 8, 9, 10"
            onChange={(e) =>
              setFormData({
                ...formData,
                size: e.target.value
                  .split(",")
                  .map((s) => Number(s.trim()))
                  .filter((n) => !isNaN(n)),
              })
            }
            className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
          />
          <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
            Current sizes: {formData.size.join(", ")}
          </p>
        </div>

        {/* Images */}
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Images (URLs)
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex-1 p-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm dark:bg-gray-700 dark:text-white"
            />
            <button
              type="button"
              onClick={() => {
                if (imageUrl.trim()) {
                  setFormData({
                    ...formData,
                    images: [...formData.images, imageUrl.trim()],
                  });
                  setImageUrl("");
                }
              }}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          {/* Preview URLs */}
          <ul className="mt-2 space-y-1">
            {formData.images.map((img, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-gray-100 p-2 rounded dark:bg-gray-700"
              >
                <span className="text-sm truncate dark:text-gray-200">
                  {img}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      images: formData.images.filter((_, idx) => idx !== i),
                    })
                  }
                  className="text-red-500 text-sm"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
            placeholder="Write product description here"
            required
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end pt-4 space-x-2 border-t dark:border-gray-600">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {isSubmitting ? "Saving..." : "Save product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
