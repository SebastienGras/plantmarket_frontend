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
import { JSX, useState } from "react";
import { Link } from "react-router-dom";

import { PageTitle } from "@components/Typography/PageTitle";
import { useAuth } from "@hooks/useAuth";
import { useDebounce } from "@hooks/useDebounce";
import { formatPrice } from "@utils/format";

import CategoryCarousel from "./components/CategoryCarousel";
import CategorySelect from "./components/CategorySelect";
import SubcategorySelect from "./components/SubcategorySelect";
import { HOME_FILTERS, HOME_TEXTS } from "./constants";
import { useSearchProducts } from "./hooks/useSearchProducts";

const Home = (): JSX.Element => {
  const { user } = useAuth();
  const [query, setQuery] = useState<HOME_FILTERS>({
    search: "",
    categoryId: "",
    subcategoryId: "",
    notSellerId: user?.id || "",
  });
  const debouncedSearch = useDebounce(query, 500);

  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useSearchProducts(debouncedSearch);

  return (
    <Box sx={{ p: 4 }}>
      <PageTitle text={HOME_TEXTS.RESEARCH} />

      <Grid container spacing={2} mb={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label={HOME_TEXTS.PLANT_NAME}
            variant="outlined"
            fullWidth
            value={query.search}
            onChange={(e) => setQuery({ ...query, search: e.target.value })}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <CategorySelect setQuery={setQuery} query={query} />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <SubcategorySelect
            categoryId={query.categoryId}
            setQuery={setQuery}
            query={query}
            disabled={!query.categoryId}
          />
        </Grid>
      </Grid>

      {isProductsLoading && <CircularProgress />}
      {productsError && (
        <Typography color="error">{HOME_TEXTS.LOADING_ERROR}</Typography>
      )}

      <Grid container spacing={3}>
        {products?.map((product) => (
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
        ))}
      </Grid>
      <CategoryCarousel />
    </Box>
  );
};

export default Home;
