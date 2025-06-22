import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { CATEGORY } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { TIME } from "@constants/time";
import { api } from "@services/axios";

export const useGetCategories = (): UseQueryResult<CATEGORY[], Error> =>
  useQuery<CATEGORY[]>({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => {
      const { data } = await api.get<CATEGORY[]>(`/${QUERY_KEYS.CATEGORIES}`);
      return data;
    },
    staleTime: TIME.FIVE_MINUTES_IN_MILLISECONDS,
  });
