import { PUBLIC_ROUTES } from "@constants/routes";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UnauthenticatedAppBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button color="inherit" onClick={() => navigate(PUBLIC_ROUTES.REGISTER)}>
        Inscription
      </Button>
      <Button color="inherit" onClick={() => navigate(PUBLIC_ROUTES.LOGIN)}>
        Connexion
      </Button>
    </>
  );
};
export default UnauthenticatedAppBar;
