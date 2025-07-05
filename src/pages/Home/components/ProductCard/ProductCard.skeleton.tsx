import { Grid, Skeleton } from "@mui/material";
import { JSX } from "react";

const ProductCardSkeleton = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Grid size={{ md: 4, xs: 12 }} key={index}>
          <Skeleton variant="rounded" width={"100%"} height={180} />
          <Skeleton variant="text" width={"60%"} sx={{ mt: 2 }} />
          <Skeleton variant="text" width={"80%"} />
          <Skeleton variant="text" width={"40%"} sx={{ mt: 1 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardSkeleton;
