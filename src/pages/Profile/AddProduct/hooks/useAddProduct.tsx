import { QUERY_KEYS } from "@constants/queryKeys";
import { useSnackbar } from "@contexts/SnackbarContext";
import { api } from "@services/axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useAddProduct = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_PRODUCT],
    mutationFn: async (productData: any) => {
      const response = await api.post("/products", productData);
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
