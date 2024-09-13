const SkeletonDetail = () => {
    return (
      <div className="container mx-auto py-8">
        {/* Back Button Placeholder */}
        <div className="ml-10 mb-6 h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
  
        {/* Title Placeholder */}
        <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-6 animate-pulse"></div>
  
        {/* Product Details and Images Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image Placeholder */}
          <div className="h-96 bg-gray-300 rounded animate-pulse"></div>
  
          {/* Product Information Placeholder */}
          <div>
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
          </div>
        </div>
  
        {/* Reviews Section Placeholder */}
        <div className="mt-8">
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4 animate-pulse"></div>
          {/* Individual Review Placeholder */}
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="bg-gray-100 p-4 mb-4 rounded shadow animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/5"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SkeletonDetail;
  