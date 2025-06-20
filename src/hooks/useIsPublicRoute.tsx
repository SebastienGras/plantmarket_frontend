import { useLocation, matchPath } from "react-router-dom";
import { PUBLIC_ROUTES } from "@constants/routes";

const useIsPublicRoute = (): boolean => {
  const location = useLocation();
  const pathname = location.pathname;

  return Object.values(PUBLIC_ROUTES).some((routePattern) =>
    matchPath({ path: routePattern, end: true }, pathname)
  );
};

export default useIsPublicRoute;
