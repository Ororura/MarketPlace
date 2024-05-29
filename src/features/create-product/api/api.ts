import { api } from "@/shared";

export const createProductApi = api.injectEndpoints({
  endpoints: (build) => ({
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
