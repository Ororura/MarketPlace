import { api } from "@/shared";

export const deleteProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteProduct: build.mutation<void, number>({
      query: (id) => ({
        url: `delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeleteProductMutation } = deleteProductApi;
