import { useState } from "react";

function Modal({
  modalType,
  editingProduct,
  handleEditProduct,
  handleAddProduct,
  closeModal,
  newProduct,
  setNewProduct,
  setEditingProduct,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!newProduct.title) newErrors.title = "Title is required.";
    if (!newProduct.description)
      newErrors.description = "Description is required.";
    if (!newProduct.price || newProduct.price <= 0)
      newErrors.price = "Price must be a positive number.";
    if (!newProduct.thumbnail)
      newErrors.thumbnail = "Thumbnail URL is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      modalType === "add" ? handleAddProduct() : handleEditProduct();
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 w-full max-w-md z-20 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          {modalType === "add" ? "Add New Product" : "Edit Product"}
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={
              modalType === "add" ? newProduct.title : editingProduct.title
            }
            onChange={(e) =>
              modalType === "add"
                ? setNewProduct({ ...newProduct, title: e.target.value })
                : setEditingProduct({
                    ...editingProduct,
                    title: e.target.value,
                  })
            }
            className={`input input-bordered w-full ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            value={
              modalType === "add"
                ? newProduct.description
                : editingProduct.description
            }
            onChange={(e) =>
              modalType === "add"
                ? setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                  })
                : setEditingProduct({
                    ...editingProduct,
                    description: e.target.value,
                  })
            }
            className={`textarea textarea-bordered w-full ${
              errors.description ? "border-red-500" : ""
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Price"
            value={
              modalType === "add" ? newProduct.price : editingProduct.price
            }
            onChange={(e) =>
              modalType === "add"
                ? setNewProduct({ ...newProduct, price: e.target.value })
                : setEditingProduct({
                    ...editingProduct,
                    price: e.target.value,
                  })
            }
            className={`input input-bordered w-full ${
              errors.price ? "border-red-500" : ""
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Thumbnail URL"
            value={
              modalType === "add"
                ? newProduct.thumbnail
                : editingProduct.thumbnail
            }
            onChange={(e) =>
              modalType === "add"
                ? setNewProduct({ ...newProduct, thumbnail: e.target.value })
                : setEditingProduct({
                    ...editingProduct,
                    thumbnail: e.target.value,
                  })
            }
            className={`input input-bordered w-full ${
              errors.thumbnail ? "border-red-500" : ""
            }`}
          />
          {errors.thumbnail && (
            <p className="text-red-500 text-sm">{errors.thumbnail}</p>
          )}
        </div>
        <div className="flex justify-between space-x-2">
          <button
            className="btn btn-primary flex-1 bg-blue-600 hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            {modalType === "add" ? "Add Product" : "Save Changes"}
          </button>
          <button
            className="btn btn-secondary flex-1 bg-gray-400 hover:bg-gray-500 transition"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
