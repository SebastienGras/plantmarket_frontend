import { QUERY_KEYS } from "@constants/queryKeys";
import { api } from "@services/axios";
import { useMutation } from "@tanstack/react-query";

export const useAddProduct = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.ADD_PRODUCT],
    mutationFn: async (productData: any) => {
      const response = await api.post("/products", productData);
      return response.data;
    },
    onSuccess: () => {
      // Optionally, you can invalidate queries or perform other actions on success
      console.log("Product added successfully");
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });
};
