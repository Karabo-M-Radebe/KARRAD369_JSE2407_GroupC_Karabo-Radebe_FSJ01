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
import "../styles/globals.css"

const ProductCards = ({ initialProducts, currentPage }) => {
  const [products, setProducts] = useState(initialProducts || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pageParam = searchParams.get('page') || '1'; // Get page number from the URL query
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

    // Fetch products whenever the page changes
    fetchProducts();
  }, [page]);

  const handleNextPage = () => {
    const nextPage = page + 2; // Convert zero-based index to 1-based
    window.history.pushState({}, '', `${pathname}?page=${nextPage}`);
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      const prevPage = page; // Convert zero-based index to 1-based
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
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-48 w-full object-contain mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-800 font-bold mt-2">${product.price}</p>
            <a href={`/product/${product.id}`}>
              <button className='bg-gray-800 text-white py-2 px-4 rounded w-full hover:bg-gray-600'>
                view details
              </button>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <div>
            <button onClick={handlePreviousPage} disabled={page === 0} className="group" >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="32" width="32" 
                    viewBox="0 0 512 512"
                    className="group-hover:scale-110">
                    <path 
                    fill="#b6c1d2" 
                    d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
                </svg>
            </button>

        </div>
        
        <p>{page + 1}</p>
        <div>
            <button onClick={handleNextPage} className="group">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="32" width="32" 
                    viewBox="0 0 512 512"
                    className="group-hover:scale-110">
                    <path 
                    fill="#b6c1d2" 
                    d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
                </svg>
            </button>
        </div>
        
      </div>
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