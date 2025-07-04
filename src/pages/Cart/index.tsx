import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { JSX } from "react";

import ButtonComponent from "@components/Button";
import { PageTitle } from "@components/Typography/PageTitle";
import { useAuth } from "@hooks/useAuth";
import { useGetSummaryCartByUserId } from "@hooks/useGetSummaryCartByUserId";
import { formatPrice } from "@utils/format";

import CartItem from "./components/CartItem";
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
      <PageTitle text="Mon panier" />
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        <Grid size={8}>
          {cartItems.map((item) => (
            <CartItem key={item.productId} item={item} />
          ))}
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
