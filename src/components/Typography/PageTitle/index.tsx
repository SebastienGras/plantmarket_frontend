import Typography from "@mui/material/Typography";
import { JSX } from "react";

type PageTitleProps = {
  text: string;
  color?: "error" | "primary" | "secondary" | "inherit";
};

export const PageTitle = ({
  color = "primary",
  text,
}: PageTitleProps): JSX.Element => {
  return (
    <Typography variant="h4" color={color} gutterBottom>
      {text}
    </Typography>
  );
};
