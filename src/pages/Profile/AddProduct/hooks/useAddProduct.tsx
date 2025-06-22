import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { PRODUCT } from "@constants/models";
import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@hooks/useSnackbar";
import { api } from "@services/axios";

export const useAddProduct = (): UseMutationResult<
  PRODUCT,
  Error,
  any,
  unknown
> => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_PRODUCT],
    mutationFn: async (productData: any) => {
      const response = await api.post<any, AxiosResponse<PRODUCT>>(
        "/products",
        productData
      );
      return response.data;
    },
    onSuccess: () => {
      showSnackbar("Produit ajouté avec succès !", "success");
      navigate(0);
      console.log("Product added successfully");
    },
    onError: (error) => {
      showSnackbar("Erreur lors de l'ajout du produit", "error");
      console.error("Error adding product:", error);
    },
  });
};
