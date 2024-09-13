"use client";

import ProductDetail from "../components/ProductDetails";
import SkeletonDetail from "../components/SkeletonDetail";
import { useState, useEffect } from "react";

const ProductPage = ({ id }) => {
  const [product, setProduct] = useState(null); // Initialize with null for better conditional rendering
  const [loading, setLoading] = useState(true); // Set initial state to true (loading)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading state to true when the fetch starts
        const response = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);
        const data = await response.json();
        setProduct(data); // Set the product data from the response
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false); // Set loading state to false when fetch is complete
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch when the `id` changes

  // If still loading, render SkeletonDetail component
  if (loading) {
    return <SkeletonDetail />;
  }

  // Render ProductDetail component if product data is available
  return product ? (
    <ProductDetail product={product} />
  ) : (
    <div className="text-center text-3xl text-red-500">Oops, there seems to be an error buddy! Product not found</div>
  );
};

export default ProductPage;
