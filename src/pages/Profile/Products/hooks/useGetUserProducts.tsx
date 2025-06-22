import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { PRODUCT_WITH_CATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";

export const useGetUserProducts = (
  userId: string
): UseQueryResult<PRODUCT_WITH_CATEGORY[], Error> =>
  useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_SEARCH, { userId }],
    queryFn: async () => {
      const response = await api.get<PRODUCT_WITH_CATEGORY[]>(
        `/products/user/${userId}`
      );
      return response.data;
    },
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
  });
