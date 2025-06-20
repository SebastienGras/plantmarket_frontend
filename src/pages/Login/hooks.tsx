import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";
import { useMutation } from "@tanstack/react-query";

export type LoginUserParams = {
  email: string;
  password: string;
};
export const useLoginUser = () =>
  useMutation({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: async ({ email, password }: LoginUserParams) => {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    },
  });
