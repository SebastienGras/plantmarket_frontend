import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { USER } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

type useUpdateUserProps<T extends string> = {
  userId: string;
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

export const useUpdateUser = <T extends string>({
  userId,
  setSelectedTab,
  productTab,
}: useUpdateUserProps<T>): UseMutationResult<
  any,
  Error,
  Partial<USER>,
  unknown
> => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.USER, userId, "edit"],
    mutationFn: async (userData) => {
      const response = await api.patch<any, AxiosResponse<USER>, Partial<USER>>(
        `/users/${userId}`,
        userData
      );
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Utilisateur modifié avec succès !", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER, userId],
      });
      setSelectedTab(productTab);
    },
    onError: (error) => {
      console.error("Error updating user:", error);
      showSnackbar("Erreur lors de la mise à jour de l'utilisateur", "error");
    },
  });
};
