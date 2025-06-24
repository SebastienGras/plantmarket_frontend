import { TextField } from "@mui/material";
import { JSX } from "react";
import { Field } from "react-final-form";

const TextFieldComponent = ({
  name,
  label,
  type = "text",
  multiline = false,
  isSelect = false,
  children = <></>,
}: {
  name: string;
  label: string;
  type?: string;
  isSelect?: boolean;
  multiline?: boolean;
  children?: JSX.Element | JSX.Element[] | undefined;
}): JSX.Element => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <TextField
          {...input}
          type={type}
          label={label}
          select={isSelect}
          multiline={multiline}
          rows={multiline ? 4 : 1}
          fullWidth
          margin="normal"
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error}
        >
          {children}
        </TextField>
      )}
    </Field>
  );
};

export default TextFieldComponent;
