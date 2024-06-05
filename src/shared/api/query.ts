import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const query = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
});

export { query };
