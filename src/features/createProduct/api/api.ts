import { api } from "@/shared/api";

export const createProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation<void, FormData>({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = createProductApi;
