import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import Home from "@pages/Home";
import { ALL_ROUTES } from "@constants/routes";

const PlantRouter = () => (
  <Routes>
    <Route path={ALL_ROUTES.HOME} element={<Home />} />
    <Route path={ALL_ROUTES.LOGIN} element={<Login />} />
    <Route path={ALL_ROUTES.PROFILE} element={<Profile />} />
  </Routes>
);

export default PlantRouter;
