import { Form, Field } from "react-final-form";
import {
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
  Box,
} from "@mui/material";
import { useRegister } from "./hooks/useRegister";
import ButtonComponent from "@components/Button";

const Register = () => {
  const { mutate: registerMutation, isPending, error } = useRegister();

  const onSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
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
                <Field name="email">
                  {({ input, meta }) => (
                    <TextField
                      label="Email"
                      type="email"
                      fullWidth
                      margin="normal"
                      {...input}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <TextField
                      label="Mot de passe"
                      type="password"
                      fullWidth
                      margin="normal"
                      {...input}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="confirmPassword">
                  {({ input, meta }) => (
                    <TextField
                      label="Confirmation du Mot de passe"
                      type="password"
                      fullWidth
                      margin="normal"
                      {...input}
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>

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
