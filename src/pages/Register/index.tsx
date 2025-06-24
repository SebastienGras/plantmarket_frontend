import { Alert, Box, Container, Paper } from "@mui/material";
import { JSX } from "react";
import { Form } from "react-final-form";

import SubmitButton from "@components/Form/SubmitButton";
import TextFieldComponent from "@components/Form/TextField";
import { PageTitle } from "@components/Typography/PageTitle";

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
        <PageTitle text="Inscription" />

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

                <SubmitButton
                  label="S'inscrire"
                  disabled={isPending}
                  pendingLabel="Création en cours..."
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
