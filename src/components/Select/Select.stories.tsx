import { SelectChangeEvent } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { JSX, useState } from "react";

import SelectComponent from "./index";

const meta: Meta<typeof SelectComponent> = {
  title: "Components/SelectComponent",
  component: SelectComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SelectComponent>;

const mockData = [
  { id: "1", name: "Plantes grasses" },
  { id: "2", name: "Plantes tropicales" },
  { id: "3", name: "Plantes à fleurs" },
];

const Template = ({
  ...args
}: Omit<
  React.ComponentProps<typeof SelectComponent>,
  "selected" | "handleChange"
>): JSX.Element => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: SelectChangeEvent): void => {
    setSelected(event.target.value);
  };

  return (
    <SelectComponent
      {...args}
      selected={selected}
      handleChange={handleChange}
    />
  );
};

export const Default: Story = {
  render: () =>
    Template({
      label: "Catégorie",
      datas: mockData,
      isLoading: false,
    }),
};

export const Loading: Story = {
  render: () =>
    Template({
      label: "Catégorie",
      datas: [],
      isLoading: true,
    }),
};

export const WithoutAllOption: Story = {
  render: () =>
    Template({
      label: "Catégorie",
      datas: mockData,
      isLoading: false,
      displayAllOption: false,
    }),
};

export const CustomAllLabel: Story = {
  render: () =>
    Template({
      label: "Catégorie",
      datas: mockData,
      isLoading: false,
      allLabel: "Toutes les catégories",
    }),
};
