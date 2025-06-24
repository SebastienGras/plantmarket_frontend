import { ArrowBackIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import { JSX } from "react";

const ArrowLeft = (props: any): JSX.Element => (
  <Box
    {...props}
    sx={{ position: "absolute", top: "40%", left: -30, zIndex: 1 }}
  >
    <ArrowBackIos color="action" />
  </Box>
);

export default ArrowLeft;
