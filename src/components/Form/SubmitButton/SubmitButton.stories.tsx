import type { Meta, StoryObj } from "@storybook/react-vite";
import { JSX, useState } from "react";

import SubmitButton from "./index";

const meta: Meta<typeof SubmitButton> = {
  title: "Components/Form/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  args: {
    label: "Envoyer",
    pendingLabel: "Envoi en cours...",
  },
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const EnCours: Story = {
  args: {
    disabled: true,
  },
};

const InteractifComponent = (args: any): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const simulateSubmit = (): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        simulateSubmit();
      }}
    >
      <SubmitButton {...args} disabled={loading} />
    </form>
  );
};

export const Interactif: Story = {
  render: (args) => <InteractifComponent {...args} />,
};
