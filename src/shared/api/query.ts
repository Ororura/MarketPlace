import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

const query = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCALHOST,
  prepareHeaders: (headers) => {
    const token = Cookies.get("jwt");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export { query };
