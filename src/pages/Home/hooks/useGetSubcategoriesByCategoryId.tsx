import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { SUBCATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";

export const useGetSubcategoriesByCategoryId = (
  categoryId?: string
): UseQueryResult<SUBCATEGORY[], Error> =>
  useQuery<SUBCATEGORY[]>({
    queryKey: [QUERY_KEYS.SUBCATEGORIES_BY_CATEGORY_ID, categoryId],
    queryFn: async () => {
      const { data } = await api.get<SUBCATEGORY[]>(
        `/${QUERY_KEYS.SUBCATEGORIES_BY_CATEGORY_ID}/${categoryId}`
      );
      return data;
    },
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
    enabled: !!categoryId,
  });
