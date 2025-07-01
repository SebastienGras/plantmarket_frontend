import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { JSX } from "react";

type QuantitySelectorProps = {
  value: number;
  onChange: (newValue: number) => void;
  min: number;
  max: number;
};

const QuantitySelector = ({
  value,
  onChange,
  min,
  max,
}: QuantitySelectorProps): JSX.Element => {
  const handleIncrement = (): void => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = (): void => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleIncrement} size="small">
        <KeyboardArrowUp />
      </IconButton>
      <TextField
        value={value}
        size="small"
        slotProps={{
          htmlInput: {
            readOnly: true,
            style: { textAlign: "center", width: "3ch" },
          },
        }}
        sx={{ mx: 1, width: 50 }}
      />
      <IconButton onClick={handleDecrement} size="small">
        <KeyboardArrowDown />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
