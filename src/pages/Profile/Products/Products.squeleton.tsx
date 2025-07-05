import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { JSX } from "react";

import { PageTitle } from "@components/Typography/PageTitle";

const ProductsSkeleton = (): JSX.Element => {
  return (
    <Box>
      <PageTitle text="Mes produits" />

      <List>
        {Array.from({ length: 5 }).map((_, index) => (
          <ListItem key={index} divider alignItems="flex-start">
            <ListItemAvatar>
              <Skeleton variant="rounded" width={80} height={80} />
            </ListItemAvatar>
            <ListItemText
              primary={<Skeleton variant="text" width="25%" />}
              secondary={
                <>
                  <Skeleton variant="text" width="20%" />
                  <Skeleton variant="text" width="20%" />
                  <Skeleton variant="text" width="40%" />
                  <Skeleton variant="text" width="45%" />
                </>
              }
              sx={{ marginX: 2 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductsSkeleton;
