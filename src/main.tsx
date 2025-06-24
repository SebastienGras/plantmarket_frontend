import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@contexts/AuthContext";
import { SnackbarProvider } from "@contexts/SnackbarContext";

import App from "./App";
import theme from "./theme";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
