"use client";

import { useState } from "react";
import "../styles/globals.css";

const ProductDetail = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div className="text-center text-gray-500">Product not found.</div>;
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
      <button 
        onClick={handleBack} 
        className="text-blue-500 font-semibold mb-6 hover:underline"
      >
        &larr; Back
      </button>

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
          <p className="text-gray-700 bg-gray-500 w-20 rounded px-2 py-1 inline-block"> Category: {product.category} </p>
          <p className="mt-2">Tags: {product.tags ? product.tags.join(", ") : "N/A"}</p>
          <p className="mt-2">Rating: {product.rating}/5</p>
          <p className="mt-2"> {product.stock} In stock | Availability: {product.availabilityStatus} </p>
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
              <p className="text-sm text-gray-400 mt-1">{review.date}</p>
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