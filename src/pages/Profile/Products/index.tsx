import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { JSX } from "react";

import { PageTitle } from "@components/Typography/PageTitle";
import { useAuth } from "@hooks/useAuth";
import { useConfirmModal } from "@hooks/useConfirmModal";
import { useGetProductsByUserId } from "@hooks/useGetProductsByUserId";
import { formatPrice } from "@utils/format";

import { useDeleteProduct } from "./hooks/useDeleteProduct";

type ProductsProps = {
  setSelectedTab: () => void;
  setProductId: (id: string) => void;
};

const Products = ({
  setSelectedTab,
  setProductId,
}: ProductsProps): JSX.Element => {
  const { user } = useAuth();
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetProductsByUserId(user!.id);

  const { mutate: deleteProduct } = useDeleteProduct();
  const confirm = useConfirmModal();

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Alert severity="error">Erreur lors du chargement des produits</Alert>
    );

  if (!products || products.length === 0)
    return <Typography>Aucun produit trouvé.</Typography>;

  return (
    <Box>
      <PageTitle text="Mes produits" />

      <Button variant="outlined" onClick={() => refetch()} sx={{ mb: 2 }}>
        Rafraîchir
      </Button>
      <List>
        {products.map((product) => (
          <ListItem key={product.id} divider alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                src="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
                alt={product.title}
                sx={{ width: 80, height: 80, mr: 2 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Chip
                    size="small"
                    label={product.actif ? "Actif" : "Inactif"}
                    color={product.actif ? "success" : "default"}
                  />
                </Stack>
              }
              secondary={
                <>
                  <Typography variant="body2">
                    Prix : {formatPrice(product.price)}
                  </Typography>
                  <Typography variant="body2">
                    Stock : {product.stock}
                  </Typography>
                  <Typography variant="body2">
                    Catégorie : {product.categoryName ?? "N/A"}
                  </Typography>
                  <Typography variant="body2">
                    Sous-catégorie : {product.subcategoryName ?? "N/A"}
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction>
              <Stack spacing={1}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setProductId(product.id);
                    setSelectedTab();
                  }}
                >
                  Modifier
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    confirm({
                      title: "Supprimer le produit",
                      content: "Es-tu sûr de vouloir supprimer le produit ?",
                      confirmLabel: "Supprimer",
                      onConfirm: () => deleteProduct(product.id),
                    });
                  }}
                >
                  Supprimer
                </Button>
              </Stack>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Products;
