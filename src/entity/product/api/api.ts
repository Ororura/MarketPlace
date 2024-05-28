import { api } from "@/shared/api";
import { IProduct } from "@/shared";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

export const productApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      "api"
    >,
  ) => ({
    getProduct: build.query<IProduct[], void>({
      query(): string | FetchArgs {
        return "products";
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductQuery } = productApi;
