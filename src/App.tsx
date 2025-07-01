import { Box, Container } from "@mui/material";
import { JSX } from "react";

import AppBarComponent from "@components/AppBar/components";
import Footer from "@components/Footer";
import "./App.css";

import PlantRouter from "./router";

function App(): JSX.Element {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Container component="main" sx={{ flex: 1 }}>
          <AppBarComponent />
          <PlantRouter />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
