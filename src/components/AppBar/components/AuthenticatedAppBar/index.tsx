import ButtonComponent from "@components/Button";
import { AUTHENTICATED_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedAppBar = (): JSX.Element => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignoutClick = (): void => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <ButtonComponent
        variant="text"
        color="inherit"
        text="Mon profil"
        fullWidth={false}
        onClick={() => navigate(AUTHENTICATED_ROUTES.PROFILE)}
      />
      <ButtonComponent
        variant="text"
        color="inherit"
        text="Déconnexion"
        onClick={handleSignoutClick}
        fullWidth={false}
      />
    </>
  );
};
export default AuthenticatedAppBar;
