import { api } from "@/shared/api";
import { IProduct } from "@/shared/types";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<IProduct[], void>({
      query: () => "products",
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery } = productApi;
