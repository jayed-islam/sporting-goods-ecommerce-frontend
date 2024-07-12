import ProductCard from "@/layouts/common/product-card";
import ShimmerCard from "../../layouts/common/product-shimmer-card";
import { useGetProductListQuery } from "../../redux/reducers/product/productApi";

const HomeFeatureSection = () => {
  const { data, isFetching } = useGetProductListQuery(
    { limit: 10, page: 1 },
    { pollingInterval: 30000 }
  );
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Featured Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {isFetching
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <ShimmerCard key={item} />)
            : data?.data?.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSection;
