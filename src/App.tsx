import { JSX } from "react";

import AppBarComponent from "@components/AppBar/components";

import "./App.css";
import PlantRouter from "./router";

function App(): JSX.Element {
  return (
    <>
      <AppBarComponent />
      <PlantRouter />
    </>
  );
}

export default App;
