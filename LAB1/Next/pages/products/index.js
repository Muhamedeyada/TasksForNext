import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

function ProductComponent() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    thumbnail: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleAddProduct = async () => {
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (res.ok) {
      fetchProducts();
      setNewProduct({ title: "", description: "", price: "", thumbnail: "" });
      setShowModal(false);
    }
  };

  const handleEditProduct = async () => {
    const res = await fetch(
      `http://localhost:3000/products/${editingProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingProduct),
      }
    );
    if (res.ok) {
      fetchProducts();
      setEditingProduct(null);
      setShowModal(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchProducts();
    }
  };

  const openAddModal = () => {
    setModalType("add");
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setModalType("edit");
    setEditingProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <button className="btn btn-primary mb-4" onClick={openAddModal}>
        Add Product
      </button>

      {/* A7la Card 😎 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            closeModal={closeModal}
            handleDeleteProduct={handleDeleteProduct}
            openEditModal={openEditModal}
          />
        ))}
      </div>

      {/* ElModel Ya 3m elNas 😂 */}
      {showModal && (
        <Modal
          modalType={modalType}
          editingProduct={editingProduct}
          handleEditProduct={handleEditProduct}
          handleAddProduct={handleAddProduct}
          closeModal={closeModal}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          setEditingProduct={setEditingProduct}
        />
      )}
    </div>
  );
}

export default ProductComponent;
