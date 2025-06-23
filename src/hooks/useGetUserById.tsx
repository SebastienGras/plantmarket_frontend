import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { USER } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";

export const useGetUserById = (
  userId?: string
): UseQueryResult<USER, Error> => {
  return useQuery<USER>({
    queryKey: [QUERY_KEYS.USER, userId],
    queryFn: async () => {
      const { data } = await api.get<USER>(`/users/${userId}`);
      return data;
    },
    enabled: !!userId,
    retry: 1,
  });
};
