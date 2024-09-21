import { useRouter } from "next/router";
import { useState } from "react";

function ProductDetail({ product }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-bold">Loading...</div>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="card w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-900 shadow-xl text-white flex flex-col md:flex-row p-4">
        <figure className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl object-cover h-40 w-40 md:h-48 md:w-48"
          />
        </figure>
        <div className="card-body flex flex-col justify-center md:ml-8 p-4">
          <h2 className="card-title text-3xl font-bold text-yellow-400 mb-2">
            {product.title}
          </h2>
          <div className="text-blue-400 mb-2">Rating: {product.rating}</div>
          <p className="mb-2">{product.description}</p>
          <p className="text-2xl font-bold mb-2">${product.price}</p>
          <div className="flex items-center justify-start mb-2">
            <button
              className="btn btn-outline btn-primary"
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="text-center w-12 mx-2 bg-gray-800 text-white border-none"
            />
            <button
              className="btn btn-outline btn-primary"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          <div className="mb-2">Stock: {product.stock}</div>
          <p className="text-xl mb-4">
            Total: ${(product.price * quantity).toFixed(2)}
          </p>
          <div className="card-actions">
            <button className="btn btn-success">Add To Cart</button>
            <button
              className="btn btn-secondary"
              onClick={() => router.push("/products")}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/products/${params.id}`);
  const product = await res.json();
  return { props: { product } };
}

export default ProductDetail;
