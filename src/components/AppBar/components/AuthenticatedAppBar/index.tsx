import { useAuth } from "@hooks/useAuth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthenticatedAppBar = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignoutClick = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Button color="inherit">Mon profil</Button>
      <Button color="inherit" onClick={handleSignoutClick}>
        Déconnexion
      </Button>
    </>
  );
};
export default AuthenticatedAppBar;
