import { PRODUCT } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@contexts/SnackbarContext";
import { api } from "@services/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProduct = (productId: string) => {
  const { showSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEYS.PRODUCT, productId, "edit"],
    mutationFn: async (productData: PRODUCT) => {
      const response = await api.patch(`/products/${productId}`, productData);
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
