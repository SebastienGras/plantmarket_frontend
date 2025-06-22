import { useContext } from "react";

import {
  SnackbarContext,
  SnackbarContextType,
} from "@contexts/SnackbarContext";

export const useSnackbar = (): SnackbarContextType => {
  const ctx = useContext(SnackbarContext);
  if (!ctx)
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  return ctx;
};
