import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { api } from "@services/axios";

type RegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useRegister = (): UseMutationResult<
  any,
  Error,
  RegisterValues,
  unknown
> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (values: RegisterValues) => {
      const { data } = await api.post("/auth/register", values);
      return data;
    },
    onSuccess: () => {
      navigate("/login");
    },
  });
};
