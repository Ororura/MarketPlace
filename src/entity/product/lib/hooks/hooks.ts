import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { useWebSocket } from "@/app/providers/websockets";
import { useCreateUserMutation } from "@/features/createProduct/api";
import { SendData } from "@/shared/types/types";
import { useGetProductQuery } from "@/entity/product/api/api";
import { useDeleteProductMutation } from "@/features/deleteProduct/api";

const useUpdateProduct = () => {
  const [deleteProduct] = useDeleteProductMutation();
  const [postData] = useCreateUserMutation();
  const { client } = useWebSocket();
  const { refetch } = useGetProductQuery();

  const handlerDelete = useCallback(
    async (id: number) => {
      try {
        await deleteProduct(id).unwrap();
        await refetch();
      } catch (error) {
        if (error instanceof Error) {
          console.log("Failed to delete the product: ", error);
        }
      }
    },
    [deleteProduct, refetch],
  );

  const handlerCreate = useCallback<SubmitHandler<SendData>>(
    async (data) => {
      const formData: FormData = new FormData();

      formData.append(
        "product",
        new Blob(
          [
            JSON.stringify({
              title: data.title,
              price: data.price,
              description: data.description,
              category: data.category,
              rate: data.rate,
            }),
          ],
          { type: "application/json" },
        ),
      );

      formData.append("file", data.file[0]);

      try {
        await postData(formData).unwrap();
        await refetch();
        if (client) {
          client.publish({
            destination: "/app/createProduct",
            body: "notification",
          });
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
    [client, postData, refetch],
  );

  return { handlerDelete, handlerCreate };
};

export { useUpdateProduct };
