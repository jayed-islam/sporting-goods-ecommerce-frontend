import React from "react";
import Rating from "react-rating";
import { IProduct } from "../../types/product";
import { NavLink } from "react-router-dom";
import { paths } from "../paths";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    category,
    stock,
    brand,
    rating,
    description,
    price,
    image,
    _id,
  } = product;

  return (
    <div className="group relative block overflow-hidden border shadow-sm bg-white">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className="h-56 sm:h-72 flex items-center justify-center">
        <img
          src={image}
          alt=""
          className=" h-44 sm:h-56 transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative border border-gray-100 bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="whitespace-nowrap bg-orange-400 px-3 py-1.5 text-xs font-medium text-white">
            {brand}
          </div>

          <p className="text-lg text-gray-700 font-bold">${price}</p>
        </div>
        <h3 className="line-clamp-1 overflow-ellipsis mt-4 text-lg font-medium text-gray-900">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <div className="whitespace-nowrap text-xs font-medium bg-gray-200 rounded-lg px-2 py-1">
            <strong>Category:</strong> {category}
          </div>

          <div className="whitespace-nowrap text-xs font-medium bg-gray-200 rounded-lg px-2 py-1">
            <strong>Stock:</strong> {stock}
          </div>
        </div>

        <div className="flex items-center text-xs mt-3">
          <Rating initialRating={rating}></Rating>
        </div>

        <p className="text-xs line-clamp-3 overflow-ellipsis text-gray-700 mt-3 h-9">
          {description}
        </p>

        <div className="mt-4">
          <NavLink to={`${paths.product}/${_id}`}>
            <button className="block w-full rounded bg-orange-500 p-4 text-sm font-medium transition hover:scale-105 text-white">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
