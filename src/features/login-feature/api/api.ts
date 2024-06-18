import { api } from "@/shared/api";

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<void, string>({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body
      })
    })
  })
});

export const { useLoginMutation } = loginApi;