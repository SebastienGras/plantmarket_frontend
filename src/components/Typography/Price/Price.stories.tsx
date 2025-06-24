import type { Meta, StoryObj } from "@storybook/react";

import { PriceComponent } from "./index";

const meta: Meta<typeof PriceComponent> = {
  title: "Components/Typography/PriceComponent",
  component: PriceComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "body1",
        "body2",
        "caption",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
      ],
    },
    color: {
      control: "select",
      options: [
        "textPrimary",
        "textSecondary",
        "error",
        "primary",
        "secondary",
        "inherit",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PriceComponent>;

export const Default: Story = {
  args: {
    price: 49.99,
  },
};

export const PrimaryColor: Story = {
  args: {
    price: 79.99,
    color: "primary",
  },
};

export const Headline: Story = {
  args: {
    price: 149.99,
    variant: "h4",
  },
};
