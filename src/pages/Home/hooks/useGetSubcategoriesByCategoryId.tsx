import { useQuery } from "@tanstack/react-query";
import { api } from "@services/axios";
import { QUERY_KEYS } from "@constants/queryKeys";
import { SUBCATEGORY } from "@constants/models";

export const useGetSubcategoriesByCategoryId = (categoryId: string) =>
  useQuery<SUBCATEGORY[]>({
    queryKey: [QUERY_KEYS.SUBCATEGORIES_BY_CATEGORY_ID, categoryId],
    queryFn: async () => {
      const { data } = await api.get(
        `/${QUERY_KEYS.SUBCATEGORIES_BY_CATEGORY_ID}/${categoryId}`
      );
      return data;
    },
  });
