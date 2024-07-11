import { useGetProductByIdQuery } from "@/redux/reducers/product/productApi";
import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@mui/material";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/reducers/cart/cartSlice";
import { IProduct } from "@/types/product";
import { handleScrollToTop } from "@/hooks/handleScrollTotop";

interface Props {
  id: string;
}

const SingleProductDetails = ({ id }: Props) => {
  const { data, isFetching } = useGetProductByIdQuery(id);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ product: data?.data as IProduct, quantity: 1 }));
    handleScrollToTop();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {isFetching ? (
        <div className="min-w-[31rem] h-screen shadow-sm border justify-center flex items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-center">
            Loading....
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <PhotoProvider>
              <PhotoView src={data?.data.image}>
                <img src={data?.data.image} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-bold mb-4">{data?.data.name}</h2>
            <p className="text-gray-600 mb-2">
              Category: {data?.data.category}
            </p>
            <p className="text-gray-600 mb-2">Brand: {data?.data.brand}</p>
            <p className="text-gray-600 mb-2">Stock: {data?.data.stock}</p>

            {/* Rating */}
            <div className="mb-4">
              <Rating initialRating={data?.data.rating} />
            </div>

            {/* Description */}
            <p className="text-gray-800 mb-4">{data?.data.description}</p>

            {/* Price */}
            <p className="text-2xl font-bold mb-4">
              ${data?.data.price.toFixed(2)}
            </p>

            {/* Add to Cart Button */}
            <Button
              variant="contained"
              size="large"
              className="bg-orange-600 text-white px-4 py-2 rounded-md shadow hover:bg-orange-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductDetails;
