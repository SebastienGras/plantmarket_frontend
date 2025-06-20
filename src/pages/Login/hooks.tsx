import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";
import { useMutation } from "@tanstack/react-query";

export type LoginUserParams = {
  email: string;
  password: string;
};
export const useLoginUser = () =>
  useMutation({
    mutationKey: [QUERY_KEYS.AUTH_LOGIN],
    mutationFn: async ({ email, password }: LoginUserParams) => {
      const response = await api.post(QUERY_KEYS.AUTH_LOGIN, {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
    },
  });
