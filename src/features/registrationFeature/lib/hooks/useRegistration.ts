import { useCallback } from "react";
import { SubmitHandler } from "react-hook-form";
import { RegistrationData } from "@/features/registrationFeature/types";
import { useRegistrationMutation } from "@/features/registrationFeature/api";

const useRegistration = () => {
  const [postData] = useRegistrationMutation();
  const handleRegistration = useCallback<SubmitHandler<RegistrationData>>(
    async (data) => {
      await postData(data);
    },
    [postData],
  );
  return { handleRegistration };
};

export { useRegistration };
