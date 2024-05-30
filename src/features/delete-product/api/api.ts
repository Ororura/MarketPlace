import { api } from "@/shared/api";

export const deleteProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteProduct: build.mutation<void, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteProductMutation } = deleteProductApi;
