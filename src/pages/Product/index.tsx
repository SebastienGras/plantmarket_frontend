// src/pages/Product/ProductPage.tsx
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useGetProductById } from "./hooks/useGetProductById";

const ProductPage = () => {
  const { id: productId } = useParams();
  console.log("Product ID:", productId);
  const { data: product, isLoading, isError } = useGetProductById(productId!);

  if (isLoading) return <CircularProgress />;
  if (isError || !product) return <Typography>Produit introuvable.</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Description :</strong> {product.description}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Catégorie :</strong> {product.categoryName || "-"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Sous-catégorie :</strong> {product.subcategoryName || "-"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Prix :</strong> {product.price} €
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Stock :</strong> {product.stock}
        </Typography>
        <Typography variant="body1">
          <strong>Status :</strong> {product.actif ? "Actif" : "Inactif"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProductPage;
