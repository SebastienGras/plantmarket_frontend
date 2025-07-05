import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

type CartItemResponse = {
  id: string;
  productId: string;
  cartId: string;
  quantity: number;
};

export const useDeleteItemCart = (
  cartId: string,
  productId: string
): UseMutationResult<CartItemResponse, Error> => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.DELETE_CART_ITEM, cartId, productId],
    mutationFn: async () => {
      const response = await api.delete(`/cart/${cartId}/product/${productId}`);
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Produit supprimé du panier", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART],
      });
    },
    onError: () => {
      showSnackbar("Erreur lors de la suppression du produit", "error");
    },
  });
};
