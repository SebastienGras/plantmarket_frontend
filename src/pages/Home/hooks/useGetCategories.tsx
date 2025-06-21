import { useQuery } from "@tanstack/react-query";
import { api } from "@services/axios";
import { QUERY_KEYS } from "@constants/queryKeys";
import { CATEGORY } from "@constants/models";

export const useGetCategories = () =>
  useQuery<CATEGORY[]>({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => {
      const { data } = await api.get(`/${QUERY_KEYS.CATEGORIES}`);
      return data;
    },
  });
