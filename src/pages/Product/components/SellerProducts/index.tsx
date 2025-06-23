import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { JSX } from "react";
import { Link } from "react-router-dom";

import { PriceComponent } from "@components/Typography/Price";
import { useGetProductsByUserId } from "@hooks/useGetProductsByUserId";

type Props = {
  sellerId: string;
  excludeProductId?: string;
};

const SellerProducts = ({ sellerId, excludeProductId }: Props): JSX.Element => {
  const { data: products, isLoading } = useGetProductsByUserId(sellerId);

  if (isLoading) {
    return (
      <Box mt={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const filteredProducts = products?.filter(
    (p: any) => p.id !== excludeProductId
  );

  if (!filteredProducts || filteredProducts.length === 0) return <> </>;

  return (
    <Box mt={6}>
      <Typography variant="h5" gutterBottom>
        Autres produits du vendeur
      </Typography>
      <Grid container spacing={2}>
        {filteredProducts.map((product: any) => (
          <Grid size={4} key={product.id}>
            <Card
              component={Link}
              to={`/products/${product.id}`}
              sx={{ textDecoration: "none" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={
                  product.imageUrl ||
                  "https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
                }
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <PriceComponent price={product.price} variant="body2" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellerProducts;
