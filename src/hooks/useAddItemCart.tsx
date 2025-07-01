import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

type AddToCartPayload = {
  productId: string;
  quantity: number;
};

type CartItemResponse = {
  id: string;
  productId: string;
  userId: string;
  quantity: number;
  createdAt: string;
};

export const useAddItemCart = (
  userId?: string
): UseMutationResult<CartItemResponse, Error, AddToCartPayload, unknown> => {
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_TO_CART],
    mutationFn: async (payload: AddToCartPayload) => {
      const response = await api.post("/cart", payload);
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Produit ajouté au panier !", "success");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.CART_SUMMARY, userId],
      });
    },
    onError: () => {
      showSnackbar("Erreur lors de l'ajout au panier", "error");
    },
  });
};
