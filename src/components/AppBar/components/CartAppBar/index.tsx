import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

import { AUTHENTICATED_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { useGetSummaryCartByUserId } from "@hooks/useGetSummaryCartByUserId";
import { formatPrice } from "@utils/format";

const CartAppBar = (): JSX.Element => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: cartInformations, isLoading } = useGetSummaryCartByUserId(
    user?.id
  );

  return (
    <>
      {cartInformations ? (
        <Tooltip
          title={`Panier : ${
            cartInformations.itemCount
          } article(s) - ${formatPrice(Number(cartInformations.totalPrice))}`}
        >
          <IconButton
            size="large"
            color="inherit"
            onClick={() => navigate(AUTHENTICATED_ROUTES.CART)}
            disabled={isLoading}
          >
            <Badge badgeContent={cartInformations.itemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartAppBar;
