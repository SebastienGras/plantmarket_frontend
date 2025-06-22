import { JSX } from "react";
import { useNavigate } from "react-router-dom";

import ButtonComponent from "@components/Button";
import { PUBLIC_ROUTES } from "@constants/routes";

const UnauthenticatedAppBar = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <ButtonComponent
        variant="text"
        color="inherit"
        text="Inscription"
        onClick={() => navigate(PUBLIC_ROUTES.REGISTER)}
        fullWidth={false}
      />
      <ButtonComponent
        variant="text"
        color="inherit"
        text="Connexion"
        onClick={() => navigate(PUBLIC_ROUTES.LOGIN)}
        fullWidth={false}
      />
    </>
  );
};
export default UnauthenticatedAppBar;
