import { AppBar, Button, Toolbar } from "@mui/material";
import AuthenticatedAppBar from "./AuthenticatedAppBar";
import UnauthenticatedAppBar from "./UnauthenticatedAppBar";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "@constants/routes";

const AppBarComponent = () => {
  const token = localStorage.getItem("token");
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
        {token ? <AuthenticatedAppBar /> : <UnauthenticatedAppBar />}
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
