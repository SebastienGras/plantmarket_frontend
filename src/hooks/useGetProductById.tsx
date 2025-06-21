import { useQuery } from "@tanstack/react-query";
import { PRODUCT_WITH_CATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";

export const useGetProductById = (productId: string) => {
  return useQuery<PRODUCT_WITH_CATEGORY>({
    queryKey: [QUERY_KEYS.PRODUCT, productId],
    queryFn: async () => {
      const { data } = await api.get(`/products/${productId}`);
      return data;
    },
    enabled: !!productId,
    retry: 1,
  });
};
