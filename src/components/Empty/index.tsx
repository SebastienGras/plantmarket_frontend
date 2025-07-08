import { Box, Stack, Typography } from "@mui/material";
import { JSX } from "react";

type EmptyProps = {
  message?: string;
  imageSrc?: string;
};

const Empty = ({
  message = "Aucune plante ne correspond à votre recherche.",
  imageSrc = "/plant.svg",
}: EmptyProps): JSX.Element => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      width={"100%"}
      sx={{ py: 8, opacity: 0.75, px: "auto" }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Aucune plante trouvée"
        sx={{ width: 180, maxWidth: "80%", objectFit: "contain" }}
      />
      <Typography variant="h6" color="text.secondary" textAlign="center">
        {message}
      </Typography>
    </Stack>
  );
};

export default Empty;
