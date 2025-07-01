import { JSX } from "react";

import AppBarComponent from "@components/AppBar/components";
import Footer from "@components/Footer";
import "./App.css";

import PlantRouter from "./router";

function App(): JSX.Element {
  return (
    <>
      <AppBarComponent />
      <PlantRouter />
      <Footer />
    </>
  );
}

export default App;
