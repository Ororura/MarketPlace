import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/features/loginFeature/api";
import { LoginData } from "@/features/loginFeature/types";

const useSubmit = () => {
  const [postData] = useLoginMutation();
  const onSubmit = useCallback<SubmitHandler<LoginData>>(
    async (data) => {
      await postData(data);
    },
    [postData],
  );
  return { onSubmit };
};

export { useSubmit };
