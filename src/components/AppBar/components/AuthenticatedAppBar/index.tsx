import ButtonComponent from "@components/Button";
import { useAuth } from "@hooks/useAuth";
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
      <ButtonComponent
        variant="text"
        color="inherit"
        text="Mon profil"
        fullWidth={false}
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
