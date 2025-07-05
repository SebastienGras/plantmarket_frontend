import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { JSX, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import QuantitySelector from "@components/QuantitySelector";
import { useConfirmModal } from "@hooks/useConfirmModal";
import { useDebounce } from "@hooks/useDebounce";
import { useUpdateItemCart } from "@hooks/useUpdateItemCart";
import { useDeleteItemCart } from "@pages/Cart/hooks/useDeleteItemCart";
import { CART_ITEM } from "@pages/Cart/hooks/useGetItemsCartByUserId";
import { formatPrice } from "@utils/format";

type CartItemProps = {
  item: CART_ITEM;
};

const CartItem = ({ item }: CartItemProps): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const debouncedQuantity = useDebounce(quantity, 500);
  const { mutate: updateItemCart } = useUpdateItemCart(
    item.cartId,
    item.productId
  );
  const { mutate: deleteItemCart } = useDeleteItemCart(
    item.cartId,
    item.productId
  );
  const confirm = useConfirmModal();

  useEffect(() => {
    if (debouncedQuantity === item.quantity) return;
    if (!item.productId) return;

    updateItemCart({
      quantity: debouncedQuantity,
    });
  }, [
    debouncedQuantity,
    updateItemCart,
    item.cartId,
    item.productId,
    item.quantity,
  ]);

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
        <QuantitySelector
          value={quantity}
          min={1}
          max={Number(item.stock)}
          onChange={setQuantity}
        />
      </CardContent>

      <CardContent>
        <Typography fontWeight="bold">
          {formatPrice(item.price * quantity)}
        </Typography>
      </CardContent>

      <IconButton
        onClick={() => {
          confirm({
            title: "Supprimer le produit",
            content: "Es-tu sûr de vouloir supprimer le produit ?",
            confirmLabel: "Supprimer",
            onConfirm: () => deleteItemCart({}),
          });
        }}
      >
        <DeleteIcon color="error" />
      </IconButton>
    </Card>
  );
};

export default CartItem;
