import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Divider,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import { useGetProductById } from "../../hooks/useGetProductById";

const ProductPage = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductById(productId!);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (isError || !product)
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6">Produit introuvable</Typography>
      </Box>
    );

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid size={12}>
            <Box
              component="img"
              src="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
              alt={product.title}
              sx={{ width: "25%", borderRadius: 2, objectFit: "cover" }}
            />
          </Grid>

          <Grid size={12}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              {product.price} €
            </Typography>

            <Chip
              label={product.stock > 0 ? "Disponible" : "Indisponible"}
              color={product.stock > 0 ? "success" : "default"}
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <Typography variant="body1" sx={{ mb: 2 }}>
              {product.description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2">
              <strong>Catégorie :</strong> {product.categoryName || "N/A"}
            </Typography>

            <Typography variant="body2">
              <strong>Sous-catégorie :</strong>{" "}
              {product.subcategoryName || "N/A"}
            </Typography>

            <Typography variant="body2">
              <strong>Stock disponible :</strong> {product.stock}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
            >
              Contacter le vendeur
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductPage;
