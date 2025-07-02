import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";

export type CART_ITEM = {
  productId: string;
  quantity: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryName: string;
  subcategoryName: string;
};

export const useGetItemsCartByUserId = (
  userId?: string
): UseQueryResult<CART_ITEM[], Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CART, userId],
    queryFn: async () => {
      const res = await api.get("/cart/user/" + userId);
      return res.data;
    },
    enabled: !!userId,
  });
};
