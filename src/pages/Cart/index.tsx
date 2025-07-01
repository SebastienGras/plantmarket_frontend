import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { JSX, useState } from "react";
import { Link } from "react-router-dom";

import ButtonComponent from "@components/Button";
import { useAuth } from "@hooks/useAuth";
import { useGetSummaryCartByUserId } from "@hooks/useGetSummaryCartByUserId";
import { formatPrice } from "@utils/format";

import { useGetItemsCartByUserId } from "./hooks/useGetItemsCartByUserId";

const CartPage = (): JSX.Element => {
  const { user } = useAuth();
  const { data: cartItems, isLoading } = useGetItemsCartByUserId(user?.id);
  const { data: cartSummary } = useGetSummaryCartByUserId(user?.id);

  // Pour gérer localement les quantités (optionnel)
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (productId: string, newQty: number): void => {
    setQuantities((prev) => ({ ...prev, [productId]: newQty }));
    // ici tu peux aussi appeler une mutation pour MAJ serveur si nécessaire
  };

  const handleRemoveItem = (productId: string): void => {
    console.log("remove", productId);
  };

  if (isLoading) {
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!cartItems?.length) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="h6">Votre panier est vide</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom>
        Mon panier
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        <Grid size={8}>
          {cartItems.map((item) => {
            const quantity = quantities[item.productId] ?? item.quantity;

            return (
              <Card
                key={item.productId}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  p: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
                  alt={item.title}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />

                <Box sx={{ flex: 1, ml: 2 }}>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    component={Link}
                    to={`/products/${item.productId}`}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    Prix unitaire : {formatPrice(item.price)}
                  </Typography>
                </Box>

                <CardContent>
                  <Select
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.productId,
                        Number(e.target.value)
                      )
                    }
                    size="small"
                  >
                    {[...Array(10).keys()].map((n) => (
                      <MenuItem key={n + 1} value={n + 1}>
                        {n + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </CardContent>

                <CardContent>
                  <Typography fontWeight="bold">
                    {formatPrice(item.price * quantity)}
                  </Typography>
                </CardContent>

                <IconButton onClick={() => handleRemoveItem(item.productId)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Card>
            );
          })}
        </Grid>

        <Grid size={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Récapitulatif
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography>Nombre d&apos;articles :</Typography>
              <Typography fontWeight="medium">
                {cartSummary?.itemCount || 0}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography>Total :</Typography>
              <Typography variant="h6" color="primary">
                {cartSummary ? formatPrice(cartSummary.totalPrice) : "0 €"}
              </Typography>
            </Box>

            <ButtonComponent
              variant="contained"
              color="success"
              fullWidth
              text="Passer commande"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
