// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChoseLayout from "@components/layouts/ChoseLayout.js";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChoseLayout>
          <App />
        </ChoseLayout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
