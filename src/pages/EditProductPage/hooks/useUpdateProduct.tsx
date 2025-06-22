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

export const useUpdateProduct = (
  productId: string
): UseMutationResult<any, Error, PRODUCT, unknown> => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.PRODUCT, productId, "edit"],
    mutationFn: async (productData: PRODUCT) => {
      const response = await api.patch<any, AxiosResponse<PRODUCT>, PRODUCT>(
        `/products/${productId}`,
        productData
      );
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Produit modifié avec succès !", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS_SEARCH],
      });
    },
    onError: (error) => {
      console.error("Error updating product:", error);
      showSnackbar("Erreur lors de la mise à jour du produit", "error");
    },
  });
};
