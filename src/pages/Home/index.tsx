import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { JSX, useState } from "react";

import Empty from "@components/Empty";
import { PageTitle } from "@components/Typography/PageTitle";
import { useAuth } from "@hooks/useAuth";
import { useDebounce } from "@hooks/useDebounce";

import CategorySelect from "./components/CategorySelect";
import ProductCard from "./components/ProductCard";
import ProductCardSkeleton from "./components/ProductCard/ProductCard.skeleton";
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

      {isProductsLoading && <ProductCardSkeleton />}

      <Grid container spacing={3}>
        {products?.length && !productsError ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <Empty />
        )}
      </Grid>
    </Box>
  );
};

export default Home;
