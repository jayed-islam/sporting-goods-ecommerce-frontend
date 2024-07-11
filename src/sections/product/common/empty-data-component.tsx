import { AiOutlineShopping } from "react-icons/ai";

const EmptyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mx-auto">
      <AiOutlineShopping className="text-4xl text-gray-400 mb-4" />
      <p className="text-lg text-gray-600 mb-2">No products found.</p>
      <p className="text-sm text-gray-500">
        Try adjusting your filters or check back later.
      </p>
    </div>
  );
};

export default EmptyComponent;
