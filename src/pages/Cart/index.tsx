import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { JSX } from "react";
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
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        {cartItems.map((item) => {
          return (
            <Grid size={12} key={item.productId}>
              <Card
                component={Link}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                to={`/products/${item.productId}`}
              >
                <CardMedia
                  component="img"
                  image="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
                  alt={item.title}
                  sx={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">
                    Prix unitaire : {formatPrice(item.price)}
                  </Typography>
                  <Typography variant="body2">
                    Quantité : {item.quantity}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    Total : {formatPrice(item.price * item.quantity)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ my: 3 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Total général :</Typography>
        <Typography variant="h5" color="primary">
          {cartSummary ? formatPrice(cartSummary?.totalPrice) : "0 €"}
        </Typography>
      </Box>

      <ButtonComponent
        variant="contained"
        color="success"
        fullWidth
        text="Passer commande"
      />
    </Box>
  );
};

export default CartPage;
