import { api, IProduct } from "@/shared";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { SendData } from "@/shared/types/types";

export const createProductApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      "api"
    >,
  ) => ({
    createUser: build.mutation<FormData, FormData>({
      query: (body) => ({
        url: "upload",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = createProductApi;
