import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { Meta, StoryObj } from "@storybook/react-vite";

import BoutonComponent from "./index";

const meta: Meta<typeof BoutonComponent> = {
  title: "Components/Bouton",
  component: BoutonComponent,
  tags: ["autodocs"],
  args: {
    text: "Clique-moi",
  },
};

export default meta;
type Story = StoryObj<typeof BoutonComponent>;

export const Primaire: Story = {
  args: {
    variant: "contained",
    color: "primary",
  },
};

export const Secondaire: Story = {
  args: {
    variant: "contained",
    color: "secondary",
  },
};

export const PrimaireOutlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
  },
};

export const SecondaireOutlined: Story = {
  args: {
    variant: "outlined",
    color: "secondary",
  },
};

export const Désactivé: Story = {
  args: {
    variant: "contained",
    disabled: true,
  },
};

export const NotFullWidth: Story = {
  args: {
    variant: "contained",
    fullWidth: false,
  },
};

export const startIcon: Story = {
  args: {
    startIcon: <ShoppingCartIcon />,
  },
};
