import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import { useState } from "react";
import { useSearchProducts } from "./hooks/useSearchProducts";
import { useDebounce } from "@hooks/useDebounce";
import { HOME_TEXTS } from "./constants";

const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query, 500);

  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useSearchProducts(debouncedSearch);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        {HOME_TEXTS.RESEARCH}
      </Typography>

      <Box display="flex" gap={2} mb={4}>
        <TextField
          label={HOME_TEXTS.PLANT_NAME}
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      {isProductsLoading && <CircularProgress />}
      {productsError && (
        <Typography color="error">{HOME_TEXTS.LOADING_ERROR}</Typography>
      )}

      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid key={product.id} size={6}>
            <Card>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
