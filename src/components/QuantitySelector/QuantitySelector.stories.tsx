/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import QuantitySelector from "./index";

const meta: Meta<typeof QuantitySelector> = {
  title: "Components/QuantitySelector",
  component: QuantitySelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

export const oneToHundred: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <QuantitySelector
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    );
  },
  args: {
    value: 5,
    min: 1,
    max: 100,
  },
};
