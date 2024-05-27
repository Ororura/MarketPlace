import { api } from "@/shared/api";
import { IProduct } from "@/shared";
import { FetchArgs } from "@reduxjs/toolkit/query";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<IProduct[], void>({
      query(): string | FetchArgs {
        return "products";
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery } = productApi;
