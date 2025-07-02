import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

type UpdateItemPayload = {
  productId: string;
  quantity: number;
};

type CartItemResponse = {
  id: string;
  productId: string;
  cartId: string;
  quantity: number;
};

export const useUpdateItemCart = (
  productId?: string,
  quantity?: number
): UseMutationResult<CartItemResponse[], Error, UpdateItemPayload, unknown> => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_CART_ITEM, productId, quantity],
    mutationFn: async (payload: UpdateItemPayload) => {
      const response = await api.patch(`/cart/${payload.productId}`, payload);
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Quantité mise à jour", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_SUMMARY],
      });
    },
    onError: (error) => {
      console.error("Error updating product:", error);
      showSnackbar("Erreur lors de la mise à jour du panier", "error");
    },
  });
};
