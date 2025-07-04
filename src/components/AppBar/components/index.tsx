import { AppBar, Box, Toolbar } from "@mui/material";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

import ButtonComponent from "@components/Button";
import { PUBLIC_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";

import AuthenticatedAppBar from "./AuthenticatedAppBar";
import CartAppBar from "./CartAppBar";
import UnauthenticatedAppBar from "./UnauthenticatedAppBar";

const AppBarComponent = (): JSX.Element => {
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <ButtonComponent
          variant="text"
          color="success"
          onClick={() => navigate(PUBLIC_ROUTES.HOME)}
          text="PlantMarket"
          fullWidth={false}
        />
        <CartAppBar />
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          {user?.token ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
