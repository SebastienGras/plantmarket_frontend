import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { PRODUCT } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

export const useAddProduct = (
  setSelectedTab: () => void
): UseMutationResult<PRODUCT, Error, any, unknown> => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_PRODUCT],
    mutationFn: async (productData: any) => {
      const response = await api.post<any, AxiosResponse<PRODUCT>>(
        "/products",
        productData
      );
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Produit ajouté avec succès !", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS_SEARCH],
      });
      setSelectedTab();
    },
    onError: () => {
      showSnackbar("Erreur lors de l'ajout du produit", "error");
    },
  });
};
