import { Snackbar, Alert } from "@mui/material";
import { createContext, JSX, useState } from "react";

export type SnackbarContextType = {
  showSnackbar: (
    message: string,
    severity?: "success" | "error" | "info" | "warning"
  ) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "info" | "warning"
  >("success");

  const showSnackbar = (
    msg: string,
    sev: typeof severity = "success"
  ): void => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
