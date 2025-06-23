import Typography from "@mui/material/Typography";
import { JSX } from "react";

import { formatPrice } from "@utils/format";

type PriceComponentProps = {
  price: number;
  variant?:
    | "body1"
    | "body2"
    | "caption"
    | "h6"
    | "h5"
    | "h4"
    | "h3"
    | "h2"
    | "h1";
  color?:
    | "textPrimary"
    | "textSecondary"
    | "error"
    | "primary"
    | "secondary"
    | "inherit";
};

export const PriceComponent = ({
  color = "textPrimary",
  variant = "body1",
  price,
}: PriceComponentProps): JSX.Element => {
  return (
    <Typography variant={variant} color={color}>
      {formatPrice(price)}
    </Typography>
  );
};
