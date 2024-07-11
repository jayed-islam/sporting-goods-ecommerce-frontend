/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "../../../types/product";
import { api } from "../../api";

interface IGetSingleProductRecponse {
  data: IProduct;
  message: string;
  state: boolean;
}

interface CategoryProps {
  category: string;
}

interface IGetProductListResponse {
  message: string;
  state: boolean;
  data: {
    products: IProduct[];
    pagination: {
      totalItems: number;
      totalPages: number;
      currentPage: number;
      itemsPerPage: number;
    };
  };
}

interface IProductGetBody {
  category?: string;
  search?: string;
  sort?: "asc" | "desc";
  limit: number;
  page: number;
  brand?: string[];
  rating?: number;
  priceRange?: number[];
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query<IGetProductListResponse, IProductGetBody>({
      query: (body: IProductGetBody) => ({
        url: "/product/get-list",
        method: "POST",
        body,
      }),
    }),
    getProductById: builder.query<IGetSingleProductRecponse, string>({
      query: (id) => ({
        url: `/product/get-single/${id}`,
        method: "GET",
      }),
    }),

    getCategoryWiseProduct: builder.query<
      IGetProductListResponse,
      CategoryProps
    >({
      query: ({ category }) => ({
        url: `/product/category/${category}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetProductListQuery, useGetProductByIdQuery } = productApi;
