const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 mb-2 rounded"></div>
        <div className="flex items-center mb-2">
          <div className="h-4 bg-gray-300 w-24 rounded"></div>
        </div>
        <div className="h-24 bg-gray-300 mb-4 rounded"></div>
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-300 w-16 rounded"></div>
          <div className="h-8 bg-blue-500 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
