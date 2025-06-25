import { JSX } from "react";
import { useNavigate } from "react-router-dom";

import ButtonComponent from "@components/Button";
import { AUTHENTICATED_ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { useConfirmModal } from "@hooks/useConfirmModal";

const AuthenticatedAppBar = (): JSX.Element => {
  const confirm = useConfirmModal();

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
        onClick={() =>
          confirm({
            title: "Se déconnecter",
            content: "Es-tu sûr de vouloir te déconnecter ?",
            confirmLabel: "Déconnexion",
            onConfirm: handleSignoutClick,
          })
        }
        text="Déconnexion"
        fullWidth={false}
      />
    </>
  );
};
export default AuthenticatedAppBar;
