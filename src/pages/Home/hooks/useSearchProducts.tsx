import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { PRODUCT_WITH_CATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";
import { buildProductSearchUrl } from "../utils";
import { HOME_FILTERS } from "../constants";

export const useSearchProducts = ({
  search,
  categoryId,
  subcategoryId,
}: HOME_FILTERS): UseQueryResult<PRODUCT_WITH_CATEGORY[], Error> =>
  useQuery({
    queryKey: [
      QUERY_KEYS.PRODUCTS_SEARCH,
      { search, categoryId, subcategoryId },
    ],
    queryFn: async () => {
      const url = buildProductSearchUrl({ search, categoryId, subcategoryId });

      const response = await api.get<PRODUCT_WITH_CATEGORY[]>(url);
      return response.data;
    },
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
  });
