import { Routes, Route } from "react-router-dom";
import Login from "@pages/Login";
import Profile from "@pages/Profile";

const PlantRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);

export default PlantRouter;
