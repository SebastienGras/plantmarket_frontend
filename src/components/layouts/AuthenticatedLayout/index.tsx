import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { LayoutProps } from "../types";

const AuthenticatedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PlantSwap
          </Typography>
          <Button color="inherit">Mon profil</Button>
          <Button color="inherit">Déconnexion</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>{children}</Box>
      </Container>
    </>
  );
};

export default AuthenticatedLayout;
