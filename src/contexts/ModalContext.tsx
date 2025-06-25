import { createContext, JSX, ReactNode, useCallback, useState } from "react";

import ModalComponent from "@components/Modal";

export type ModalContextType = {
  showModal: (options: ModalOptions) => void;
  closeModal: () => void;
};

type ModalOptions = {
  title: string;
  content: (close: () => void) => ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null);

  const showModal = useCallback((options: ModalOptions) => {
    setModalOptions(options);
  }, []);

  const closeModal = useCallback(() => {
    setModalOptions(null);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalOptions && (
        <ModalComponent
          open={true}
          onClose={closeModal}
          title={modalOptions.title}
        >
          {(close) => modalOptions.content(close)}
        </ModalComponent>
      )}
    </ModalContext.Provider>
  );
};
