import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

export const useDeleteProduct = (): UseMutationResult<
  null,
  Error,
  string,
  unknown
> => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_PRODUCT, "delete"],
    mutationFn: async (productId: string) => {
      await api.delete(`/products/${productId}`);
      return null;
    },
    onSuccess: () => {
      showSnackbar("Produit supprimé avec succès !", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PRODUCTS_SEARCH],
      });
    },
    onError: () => {
      showSnackbar("Erreur lors de la suppression du produit", "error");
    },
  });
};
