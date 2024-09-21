import { useState, useEffect } from "react";

const ProductForm = ({ product = {}, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (product && product.id) {
      setFormData({
        title: product.title || "",
        description: product.description || "",
        price: product.price || "",
        thumbnail: product.thumbnail || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: product.id });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-green-700 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        {product && product.id ? "Edit Product" : "Add New Product"}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="input input-bordered w-full border-blue-500"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full border-green-500"
        />
      </div>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="textarea textarea-bordered w-full my-6 border-yellow-500"
      />
      <input
        type="url"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        placeholder="Thumbnail URL"
        className="input input-bordered w-full border-purple-500"
      />
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          className="btn btn-secondary bg-red-500 hover:bg-red-700 text-white"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white"
        >
          {product && product.id ? "Save Changes" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
