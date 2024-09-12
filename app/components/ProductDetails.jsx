"use client";

import "../styles/globals.css"

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">{product.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src={product.images}
          alt={product.title}
          className="h-96 w-full object-contain rounded"
        />
        <div>
          <p className="text-gray-800 font-bold mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>

        </div>
      </div>
    </div>
  );
};

// Server-side rendering (SSR) to fetch individual product data
export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://next-ecommerce-api.vercel.app/products/${id}`
    );
    const product = await response.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
      },
    };
  }
}

export default ProductDetail;