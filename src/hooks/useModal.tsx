import { useContext } from "react";

import { ModalContext, ModalContextType } from "@contexts/ModalContext";

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
