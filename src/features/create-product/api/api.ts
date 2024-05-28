import { api } from "@/shared";
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

export const createProductApi = api.injectEndpoints({
  endpoints: (
    build: EndpointBuilder<
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta>,
      never,
      "api"
    >,
  ) => ({
    createUser: build.mutation<void, FormData>({
      query: (body) => ({
        url: "upload",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = createProductApi;
