import { AppBar, Box, Toolbar } from "@mui/material";
import AuthenticatedAppBar from "./AuthenticatedAppBar";
import UnauthenticatedAppBar from "./UnauthenticatedAppBar";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import ButtonComponent from "@components/Button";

const AppBarComponent = () => {
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
        <Box flexGrow={1} display="flex" justifyContent="flex-end">
          {user?.token ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
