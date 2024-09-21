import { useRouter } from "next/router";

function Card({ product, openEditModal, handleDeleteProduct }) {
  const router = useRouter();
  return (
    <div
      key={product.id}
      className="card bg-base-100 shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl rounded-lg overflow-hidden"
    >
      <figure className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover h-48 w-full"
        />
        <figcaption className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
          {product.category}
        </figcaption>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl font-semibold">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="font-bold text-lg text-green-600">
          Price: ${product.price}
        </p>
        <div className="card-actions justify-end mt-4 space-x-2">
          <button
            className="btn btn-secondary"
            onClick={() => openEditModal(product)}
          >
            Edit
          </button>
          <button
            className="btn btn-error"
            onClick={() => handleDeleteProduct(product.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-primary"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
