const SkeletonCard = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 animate-pulse">
        {/* Image Placeholder */}
        <div className="h-48 w-full bg-gray-300 rounded mb-4"></div>
  
        {/* Title Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
  
        {/* Category Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
  
        {/* Price Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
  
        {/* Button Placeholder */}
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    );
  };
  
  export default SkeletonCard;
  