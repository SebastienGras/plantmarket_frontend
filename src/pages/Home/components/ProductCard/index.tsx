import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { JSX } from "react";
import { Link } from "react-router-dom";

import { PRODUCT_WITH_CATEGORY } from "@constants/models";
import { formatPrice } from "@utils/format";

const ProductCard = ({
  product,
}: {
  product: PRODUCT_WITH_CATEGORY;
}): JSX.Element => {
  return (
    <Grid key={product.id} size={{ md: 4, xs: 12 }}>
      <Card
        component={Link}
        to={`/products/${product.id}`}
        sx={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          height="180"
          image="https://img.freepik.com/psd-gratuit/monstera-deliciosa-plante-dans-pot-feuilles-vertes-luxuriantes-decoration-maison-plante-interieur-feuillage-tropical-plante-pot-verte-vibrante-plante-appartement-plante-verdure-photographie-plante_191095-84025.jpg?semt=ais_hybrid&w=740"
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(product.price)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
