import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
} from "@mui/material";
import { JSX } from "react";

type SelectComponentProps = {
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  datas: { id: string; name: string }[] | undefined;
  isLoading: boolean;
  selected: string;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  displayAllOption?: boolean;
  allLabel?: string;
};

const SelectComponent = ({
  label,
  datas,
  isLoading,
  selected,
  handleChange,
  variant = "outlined",
  disabled = false,
  fullWidth = true,
  displayAllOption = true,
  allLabel = "Toutes",
}: SelectComponentProps): JSX.Element => {
  return (
    <Box sx={{ minWidth: 200 }}>
      {isLoading ? (
        <Skeleton variant="rounded" width="100%" height={56} />
      ) : (
        <FormControl fullWidth={fullWidth} variant={variant}>
          <InputLabel id={`${label}-label`}>{label}</InputLabel>
          <Select
            labelId={`${label}-label`}
            value={selected}
            label={label}
            onChange={handleChange}
            disabled={disabled}
          >
            {displayAllOption && (
              <MenuItem value="">
                <em>{allLabel}</em>
              </MenuItem>
            )}
            {datas?.map((selectData) => (
              <MenuItem key={selectData.id} value={selectData.id}>
                {selectData.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default SelectComponent;
