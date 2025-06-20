import { AppBar, Button, Toolbar } from "@mui/material";
import AuthenticatedAppBar from "./AuthenticatedAppBar";
import UnauthenticatedAppBar from "./UnauthenticatedAppBar";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";

const AppBarComponent = () => {
  const { user } = useAuth();

  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          variant="text"
          color="secondary"
          onClick={() => navigate(PUBLIC_ROUTES.HOME)}
        >
          PlantMarket
        </Button>
        {user?.token ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
