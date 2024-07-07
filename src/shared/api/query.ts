import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const query = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_LOCALHOST,
});

export { query };
