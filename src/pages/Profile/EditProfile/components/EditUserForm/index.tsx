import { Box, Button, TextField, Typography } from "@mui/material";
import { JSX } from "react";
import { Field, Form } from "react-final-form";

import { USER } from "@constants/models";
import { zodValidator } from "@utils/validator";

import { useUpdateUser } from "../../hooks/useUpdateUser";

import { EditUserSchema } from "./validator";

type EditUserFormProps<T extends string> = {
  user: USER;
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

const EditUserForm = <T extends string>({
  user,
  setSelectedTab,
  productTab,
}: EditUserFormProps<T>): JSX.Element => {
  const { mutate: updateUser, isPending } = useUpdateUser({
    userId: user.id,
    setSelectedTab,
    productTab,
  });

  const onSubmit = (values: any): void => {
    console.log("Form values:", values);
    updateUser({
      id: user.id,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Modifier utilisateur
      </Typography>

      <Form
        onSubmit={onSubmit}
        initialValues={user}
        validate={zodValidator(EditUserSchema)}
        render={({ handleSubmit, submitting, values, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field name="firstname">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Prénom"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="lastname">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Nom"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="email">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Email"
                    fullWidth
                    type="email"
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || isPending}
                sx={{ mt: 2 }}
              >
                {isPending ? "Mise à jour en cours..." : "Mettre à jour"}
              </Button>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default EditUserForm;
