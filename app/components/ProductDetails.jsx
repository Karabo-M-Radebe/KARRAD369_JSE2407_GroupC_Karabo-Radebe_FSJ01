"use client";

import { useState } from "react";
import "../styles/globals.css";
import SkeletonDetail from "./SkeletonDetail";

const ProductDetail = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  if (!product) {
    return <div className="text-center text-gray-500">Product not found.</div>;
  }

  if (loading) {
    return <SkeletonDetail />;
  }

  // Ensure product.images is an array and has at least one image
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [];

  // Function to handle the back button
  const handleBack = () => {
    window.history.back();
  };

  // Move to the next image in the carousel
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Move to the previous image in the carousel
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto py-8">
      {/* Back Button */}
      <div className="ml-10">
      <button 
        onClick={handleBack} 
        className="group"
      >
        <svg 
            xmlns="http://www.w3.org/2000/svg" height="50" width="50"
            viewBox="0 0 512 512"
            className="group-hover:scale-110">
            <path 
            fill="#b9d1e4" 
            d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0 0-80z"
            />
        </svg>
      </button>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-center">{product.title}</h1>

      {/* Product Details and Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Image Carousel */}
        <div className="relative">
          {images.length > 1 ? (
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={product.title}
                className="h-96 w-full object-contain rounded"
              />

              {/* Carousel Controls */}
              <button
                onClick={previousImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
              >
                &larr;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded"
              >
                &rarr;
              </button>
            </div>
          ) : (
            images.length === 1 && (
              <img
                src={images[0]}
                alt={product.title}
                className="h-96 w-full object-contain rounded"
              />
            )
          )}
        </div>

        {/* Product Information */}
        <div>
          <p className="text-gray-800 font-bold mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-gray-700 mt-4"> Category: {product.category} </p>
          <p className="mt-2">Tags: {product.tags ? product.tags.join(", ") : "N/A"}</p>
          <p className="mt-2">Rating: {product.rating}/5</p>
          <p className="mt-2"> Availability: {product.availabilityStatus} | {product.stock} In stock </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 mb-4 rounded shadow">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-600">{review.reviewerEmail}</p>
              <p className="mt-2">{review.comment}</p>
              <p className="text-sm text-gray-600 mt-1">
                Rating: {review.rating}/5
              </p>
              <p className="text-sm text-gray-400 mt-1">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews available.</p>
        )}
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