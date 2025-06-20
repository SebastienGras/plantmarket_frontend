import { useMutation } from "@tanstack/react-query";
import { api } from "@services/axios";
import { useNavigate } from "react-router-dom";

type RegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useRegister = () => {
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
