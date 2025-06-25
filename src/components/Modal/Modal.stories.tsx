import { Button, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { JSX, useState } from "react";

import ModalComponent from "./index";

const meta: Meta<typeof ModalComponent> = {
  title: "Components/Modal",
  component: ModalComponent,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ModalComponent>;

type ModalDemoProps = {
  title: string;
  children: React.ReactNode | ((close: () => void) => React.ReactNode);
};

const ModalDemo = ({
  title,
  children,
  ...rest
}: ModalDemoProps): JSX.Element => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Ouvrir la modal</Button>
      <ModalComponent
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        {...rest}
      >
        {(close) => (
          <>{typeof children === "function" ? children(close) : children}</>
        )}
      </ModalComponent>
    </>
  );
};

export const Basic: Story = {
  render: () => (
    <ModalDemo title="Titre de la modal">
      <Typography>Ceci est un contenu très simple dans une modal.</Typography>
    </ModalDemo>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ModalDemo title="Modal avec beaucoup de contenu">
      <Typography>
        Voici un long texte pour démontrer le scroll et le comportement de la
        modal avec beaucoup de contenu.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        volutpat velit nec lorem gravida, eu rutrum nisi fermentum.
      </Typography>
      <Typography>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Cras non risus nec urna commodo facilisis.
      </Typography>
      <Typography>
        Phasellus feugiat orci sed eros rhoncus, nec interdum velit fermentum.
      </Typography>
    </ModalDemo>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <ModalDemo title="">
      <Typography>Modal sans titre visible.</Typography>
    </ModalDemo>
  ),
};
