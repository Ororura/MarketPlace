import { createApi } from "@reduxjs/toolkit/query/react";

import { query } from "@/shared/api/query";

export const api = createApi({
  reducerPath: "api",
  endpoints: () => ({}),
  baseQuery: query,
});
