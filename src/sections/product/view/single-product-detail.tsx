// import Rating from "react-rating";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useGetProductByIdQuery } from "../../../redux/reducers/product/productApi";
import { useAppDispatch } from "../../../redux/hooks";
import { addProduct } from "../../../redux/reducers/cart/cartSlice";
import { handleScrollToTop } from "../../../hooks/handle-scroll-to-top";
import { IProduct } from "../../../types/product";
import ScrollToTop from "../../../hooks/use-scroll-to-top";

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
      <ScrollToTop />
      {isFetching ? (
        <div className="min-w-[31rem] h-screen shadow-sm border justify-center flex items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-center">
            Loading....
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center relative group">
            <PhotoProvider>
              <PhotoView src={data?.data.image}>
                <img src={data?.data.image} alt="Product" className="w-full" />
              </PhotoView>
            </PhotoProvider>
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              See In Photo View
            </div>
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
              {/* <Rating initialRating={data?.data.rating} /> */}
              Rading: {data?.data.rating}
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
              className=" text-white px-4 py-2 rounded-md"
              onClick={handleAddToCart}
              sx={{
                bgcolor: orange[500],
                "&:hover": {
                  bgcolor: orange[600],
                },
                textTransform: "capitalize",
              }}
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
