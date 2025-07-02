import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";

type CART_SUMMARY = {
  userId: string;
  cartId: string;
  itemCount: number;
  totalPrice: number;
};

export const useGetSummaryCartByUserId = (
  userId?: string
): UseQueryResult<CART_SUMMARY, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CART, userId, QUERY_KEYS.CART_SUMMARY],
    queryFn: async () => {
      const res = await api.get(`/cart/summary/` + userId);
      return res.data;
    },
    enabled: !!userId,
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
  });
};
