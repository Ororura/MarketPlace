import Cookies from "js-cookie";
import { api } from "@/shared/api";
import { JwtResponse, LoginData } from "@/features/loginFeature/types";

export const loginApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<JwtResponse, LoginData>({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("jwt", data.response, { expires: 7 });
        } catch (e) {
          if (e instanceof Error) {
            console.error(e.message);
          }
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
