import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageTitle } from "./index";

const meta: Meta<typeof PageTitle> = {
  title: "Components/Typography/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  args: {
    text: "Titre de page",
  },
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  args: {},
};

export const PrimaryColor: Story = {
  args: {
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    color: "secondary",
  },
};
