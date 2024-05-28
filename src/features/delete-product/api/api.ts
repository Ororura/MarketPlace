import { api } from "@/shared";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

export const deleteProductApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      "api"
    >,
  ) => ({
    deleteProduct: build.mutation<void, number>({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteProductMutation } = deleteProductApi;
