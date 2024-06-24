import { LoginData } from "@/features/loginFeature/types";
import { api } from "@/shared/api";

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<string, LoginData>({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
