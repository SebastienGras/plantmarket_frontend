import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { QUERY_KEYS } from "@constants/queryKeys";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/axios";

export type LoginUserParams = {
  email: string;
  password: string;
};
export const useLoginUser = (): UseMutationResult<
  any,
  Error,
  LoginUserParams,
  unknown
> => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [QUERY_KEYS.AUTH_LOGIN],
    mutationFn: async ({ email, password }: LoginUserParams) => {
      const response = await api.post(QUERY_KEYS.AUTH_LOGIN, {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser({ ...data.user, token: data.token });
      navigate("/");
    },
  });
};
