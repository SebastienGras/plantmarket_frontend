import { PRODUCT_WITH_CATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";
import { useQuery } from "@tanstack/react-query";

export const useSearchProducts = (search: string) =>
  useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_SEARCH, { search }],
    queryFn: async () => {
      const url = search
        ? `/products?search=${encodeURIComponent(search)}`
        : "/products";

      const response = await api.get<PRODUCT_WITH_CATEGORY[]>(url);
      return response.data;
    },
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
  });
