import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";

type CART_SUMMARY = {
  userId: string;
  cartId: string;
  itemCount: number;
  totalPrice: number;
};

export const useGetItemsCartByUserId = (
  userId?: string
): UseQueryResult<CART_SUMMARY, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CART_SUMMARY, userId],
    queryFn: async () => {
      const res = await api.get(`/cart/user/` + userId);
      return res.data;
    },
    enabled: !!userId,
  });
};
