import { useGetUserProducts } from "./hooks/useGetUserProducts";
import { useAuth } from "@hooks/useAuth";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Button,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const Products = () => {
  const { user } = useAuth();
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetUserProducts(user!.id);

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Alert severity="error">Erreur lors du chargement des produits</Alert>
    );

  if (!products || products.length === 0)
    return <Typography>Aucun produit trouvé.</Typography>;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Mes produits ({products.length})
      </Typography>
      <Button variant="outlined" onClick={() => refetch()} sx={{ mb: 2 }}>
        Rafraîchir
      </Button>
      <List>
        {products.map((product) => (
          <ListItem key={product.id} divider>
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                src="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
                alt={product.title}
                sx={{ width: 80, height: 80, mr: 2 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={`Prix : ${product.price.toFixed(2)} €`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Products;
