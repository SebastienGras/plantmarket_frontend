import { Button, Stack, Typography } from "@mui/material";
import { JSX } from "react";

import { useModal } from "./useModal";

type ConfirmModalOptions = {
  title?: string;
  content: string | JSX.Element;
  confirmLabel?: string;
  onConfirm: () => void | Promise<void>;
};

export const useConfirmModal = (): ((options: ConfirmModalOptions) => void) => {
  const { showModal } = useModal();

  const confirm = ({
    title = "Etes-vous sûr ?",
    content,
    confirmLabel = "Confirmer",
    onConfirm,
  }: ConfirmModalOptions): void => {
    showModal({
      title,
      content: (close) => (
        <Stack spacing={3}>
          {typeof content === "string" ? (
            <Typography>{content}</Typography>
          ) : (
            content
          )}

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={close} color="inherit">
              Annuler
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                await onConfirm();
                close();
              }}
            >
              {confirmLabel}
            </Button>
          </Stack>
        </Stack>
      ),
    });
  };

  return confirm;
};
