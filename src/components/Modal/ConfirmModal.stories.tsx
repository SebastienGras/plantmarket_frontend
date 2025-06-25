import { Button, Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { JSX } from "react";

import { ModalProvider } from "@contexts/ModalContext";
import { useConfirmModal } from "@hooks/useConfirmModal";

const meta: Meta = {
  title: "Components/ConfirmModal",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj;

const ConfirmModalExample = (): JSX.Element => {
  const confirm = useConfirmModal();

  const handleDelete = async (): Promise<void> => {
    alert("Suppression confirmée !");
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() =>
          confirm({
            title: "Supprimer cet élément",
            content: (
              <Typography>
                Cette action est irréversible. Êtes-vous sûr de vouloir
                continuer ?
              </Typography>
            ),
            confirmLabel: "Oui, supprimer",
            onConfirm: handleDelete,
          })
        }
      >
        Ouvrir la confirmation
      </Button>
    </>
  );
};

export const Default: Story = {
  render: () => (
    <ModalProvider>
      <ConfirmModalExample />
    </ModalProvider>
  ),
};
