// import { useRouter } from "next/navigation";

// const Products = ( ) => {
//     const router = useRouter();

//     fetch (`https://next-ecommerce-api.vercel.app/products?skip=${router}`, {
//         method: 'POST',
//         body: JSON.stringify({
//             skip: 10,
//             limit: 50,
//             sortBy: "fragrances"
//         })
//     })
// }

// export default Products();

"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import "../styles/globals.css";

const ProductCards = ({ initialProducts, currentPage }) => {
  const [products, setProducts] = useState(initialProducts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pageParam = searchParams.get('page') || '1';
  const page = parseInt(pageParam) - 1;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://next-ecommerce-api.vercel.app/products?skip=${page * 20}&limit=20`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const handleNextPage = () => {
    const nextPage = page + 2;
    window.history.pushState({}, '', `${pathname}?page=${nextPage}`);
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      const prevPage = page;
      window.history.pushState({}, '', `${pathname}?page=${prevPage}`);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <button onClick={handlePreviousPage} disabled={page === 0} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          Previous
        </button>
        <span>{page + 1}</span>
        <button onClick={handleNextPage} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          Next
        </button>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }, 3000); // 3 seconds interval

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [product.images.length]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className="h-48 w-full object-contain mb-4 rounded"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1}/{product.images.length}
          </div>
        )}
      </div>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-800 font-bold mt-2">${product.price}</p>
      <a href={`/product/${product.id}`}>
        <button className="bg-gray-800 text-white py-2 px-4 rounded w-full hover:bg-gray-600 mt-4">
          View Details
        </button>
      </a>
    </div>
  );
};

// Server-side rendering (SSR) to fetch products for the initial page load
export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1;

  try {
    const response = await fetch(
      `https://next-ecommerce-api.vercel.app/products?skip=${(page - 1) * 20}&limit=20`
    );
    const products = await response.json();

    return {
      props: {
        initialProducts: products,
        currentPage: page,
      },
    };
  } catch (error) {
    return {
      props: {
        initialProducts: [],
        currentPage: page,
        error: 'Failed to load products',
      },
    };
  }
}

export default ProductCards;