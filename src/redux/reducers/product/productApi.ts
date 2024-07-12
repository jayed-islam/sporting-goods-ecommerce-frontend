/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "../../../types/product";
import { api } from "../../api";

interface IGetSingleProductRecponse {
  data: IProduct;
  message: string;
  success: boolean;
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

interface IUpdateProductStockResponse {
  message: string;
  success: boolean;
  data: IProduct[];
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

interface IUpdateProductStock {
  products: {
    productId: string;
    quantity: number;
  }[];
}

interface IUpdateProduct {
  id: string;
  product: Partial<IProduct>;
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<IGetSingleProductRecponse, IProduct>({
      query: (body: IProduct) => ({
        url: "/product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation<IGetSingleProductRecponse, IUpdateProduct>({
      query: ({ id, product }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: { product },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation<IGetSingleProductRecponse, string>({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getProductList: builder.query<IGetProductListResponse, IProductGetBody>({
      query: (body: IProductGetBody) => ({
        url: "/product/get-list",
        method: "POST",
        body,
      }),
      providesTags: ["products"],
    }),
    getProductById: builder.query<IGetSingleProductRecponse, string>({
      query: (id) => ({
        url: `/product/get-single/${id}`,
        method: "GET",
      }),
      providesTags: ["single-product"],
    }),
    updateProductStock: builder.mutation<
      IUpdateProductStockResponse,
      IUpdateProductStock
    >({
      query: (body: IUpdateProductStock) => ({
        url: "/product/update-stock",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["products", "single-product"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProductListQuery,
  useGetProductByIdQuery,
  useUpdateProductStockMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
