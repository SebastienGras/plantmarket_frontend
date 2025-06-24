import { Alert, Box, Container, Paper, Typography } from "@mui/material";
import { JSX } from "react";
import { Form } from "react-final-form";

import ButtonComponent from "@components/Button";
import TextFieldComponent from "@components/Form/TextField";

import { useRegister } from "./hooks/useRegister";

const Register = (): JSX.Element => {
  const { mutate: registerMutation, isPending, error } = useRegister();

  const onSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }): void => {
    registerMutation(values);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Créer un compte
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextFieldComponent name="email" label="Email" type="email" />

                <TextFieldComponent
                  name="password"
                  label="Mot de passe"
                  type="password"
                />

                <TextFieldComponent
                  name="confirmPassword"
                  label="Confirmation du Mot de passe"
                  type="password"
                />

                {error && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {error.message || "Erreur lors de l'inscription"}
                  </Alert>
                )}

                <ButtonComponent
                  text={isPending ? "Création..." : "S'inscrire"}
                  type="submit"
                  disabled={isPending}
                />
              </form>
            )}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
