import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import { JSX, useState } from "react";

import SubmitButton from "@components/Form/SubmitButton";

import { useLoginUser } from "./hooks";

const Login = (): JSX.Element => {
  const { mutate: loginUser, isPending, error, data } = useLoginUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Connection
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <SubmitButton
            label="Connection"
            pendingLabel="Connection en cour ..."
          />
          {isPending && <Typography>Chargement...</Typography>}
          {error && (
            <Typography color="error">
              Error:{" "}
              {error instanceof Error ? error.message : "An error occurred"}
            </Typography>
          )}
          {data && (
            <Typography color="success.main">
              Connection réussie ! Bienvenue, {data.token}!
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
