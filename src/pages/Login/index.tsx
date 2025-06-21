import React, { useState } from "react";
import { Container, Box, TextField, Typography, Paper } from "@mui/material";
import { useLoginUser } from "./hooks";
import ButtonComponent from "@components/Button";

const Login = () => {
  const { mutate: loginUser, isPending, error, data } = useLoginUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
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
          <ButtonComponent text="Login" type="submit" />
          {isPending && <Typography>Loading...</Typography>}
          {error && (
            <Typography color="error">
              Error:{" "}
              {error instanceof Error ? error.message : "An error occurred"}
            </Typography>
          )}
          {data && (
            <Typography color="success.main">
              Login successful! Welcome, {data.token}!
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
