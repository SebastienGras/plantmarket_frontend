import { ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import { JSX } from "react";

const ArrowRight = (props: any): JSX.Element => (
  <Box
    {...props}
    sx={{ position: "absolute", top: "40%", right: -30, zIndex: 1 }}
  >
    <ArrowForwardIos color="action" />
  </Box>
);

export default ArrowRight;
