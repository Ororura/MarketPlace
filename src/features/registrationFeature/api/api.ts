import Cookies from "js-cookie";
import { RegistrationData } from "@/features/registrationFeature/types";
import { api } from "@/shared/api";
export const registrationApi = api.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<{ response: string }, RegistrationData>({
      query: (body) => ({
        url: "registration",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("jwt", data.response, { expires: 7 });
        } catch (e) {}
      },
    }),
  }),
});

export const { useRegistrationMutation } = registrationApi;
