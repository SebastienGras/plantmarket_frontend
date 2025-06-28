import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { JSX, useState } from "react";
import { useParams } from "react-router-dom";

import { PriceComponent } from "@components/Typography/Price";
import { useAddItemCart } from "@hooks/useAddItemCart";
import { useGetUserById } from "@hooks/useGetUserById";

import { useGetProductById } from "../../hooks/useGetProductById";

import SellerProducts from "./components/SellerProducts";

const ProductPage = (): JSX.Element => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useGetProductById(productId!);
  const { data: user } = useGetUserById(product?.sellerId);

  const [isAdding, setIsAdding] = useState(false);
  const { mutate: addToCart } = useAddItemCart();

  const handleAddToCart = async (): Promise<void> => {
    if (!productId) return;

    try {
      setIsAdding(true);
      console.log("Ajout au panier", productId);
      addToCart({ productId, quantity: 1 });
      alert(`Produit "${product?.title}" ajouté au panier`);
    } catch (err) {
      console.error("Erreur ajout au panier", err);
    } finally {
      setIsAdding(false);
    }
    return;
  };

  if (isProductLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (isProductError || !product)
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

            <PriceComponent
              price={product.price}
              variant="h5"
              color="primary"
            />

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

            {user && (
              <>
                <Typography variant="body2">
                  <strong>Vendu par :</strong> {user.email} {user.firstname}{" "}
                  {user.lastname}
                </Typography>

                <SellerProducts
                  sellerId={product.sellerId!}
                  excludeProductId={product.id}
                />
              </>
            )}

            <Button
              variant="outlined"
              color="secondary"
              sx={{ mt: 3 }}
              fullWidth
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              disabled={isAdding || product.stock === 0}
            >
              {isAdding ? "Ajout..." : "Ajouter au panier"}
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              fullWidth
            >
              Contacter le vendeur {product.sellerId || "N/A"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductPage;
