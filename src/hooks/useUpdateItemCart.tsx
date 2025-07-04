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

export const useUpdateItemCart = (
  cartId?: string,
  productId?: string
): UseMutationResult<
  CartItemResponse[],
  Error,
  { quantity: number },
  unknown
> => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_CART_ITEM, cartId, productId],
    mutationFn: async ({ quantity }: { quantity: number }) => {
      const response = await api.patch(`/cart/${cartId}/product/${productId}`, {
        quantity,
      });
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Quantité mise à jour", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART],
      });
    },
    onError: () => {
      showSnackbar("Erreur lors de la mise à jour du panier", "error");
    },
  });
};
