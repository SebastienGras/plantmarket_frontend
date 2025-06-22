import Button from "@mui/material/Button";
import { JSX } from "react";

type ButtonComponentProps = {
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  text?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const ButtonComponent = ({
  variant = "contained",
  color = "primary",
  fullWidth = true,
  size = "medium",
  text = "Submit",
  type = "button",
  disabled = false,
  onClick,
}: ButtonComponentProps): JSX.Element => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
