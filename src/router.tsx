import { JSX } from "react";
import { Route, Routes } from "react-router-dom";

import { ALL_ROUTES } from "@constants/routes";
import CartPage from "@pages/Cart";
import Home from "@pages/Home";
import Login from "@pages/Login";
import ProductPage from "@pages/Product";
import Profile from "@pages/Profile";
import Register from "@pages/Register";

const PlantRouter = (): JSX.Element => (
  <Routes>
    <Route path={ALL_ROUTES.HOME} element={<Home />} />
    <Route path={ALL_ROUTES.LOGIN} element={<Login />} />
    <Route path={ALL_ROUTES.REGISTER} element={<Register />} />
    <Route path={ALL_ROUTES.PRODUCT} element={<ProductPage />} />
    <Route path={ALL_ROUTES.PROFILE} element={<Profile />} />
    <Route path={ALL_ROUTES.CART} element={<CartPage />} />
  </Routes>
);

export default PlantRouter;
