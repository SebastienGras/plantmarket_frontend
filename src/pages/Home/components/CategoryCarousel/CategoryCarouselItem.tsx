import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { JSX } from "react";

import { CATEGORY } from "@constants/models";

const CategoryCarouselItem = (category: CATEGORY): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="180"
          image={category.imageUrl}
          alt={category.name}
          sx={{
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" color={theme.palette.primary.main}>
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
    </>
  );
};

export default CategoryCarouselItem;
