import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "@/features/loginFeature/api";
import { LoginData } from "@/features/loginFeature/types";

const useLogin = () => {
  const [postData] = useLoginMutation();
  const login = useCallback<SubmitHandler<LoginData>>(
    async (data) => {
      await postData(data);
    },
    [postData],
  );
  return { login };
};

export { useLogin };
