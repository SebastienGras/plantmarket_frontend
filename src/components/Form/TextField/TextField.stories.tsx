import { MenuItem } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { JSX } from "react";
import { Form } from "react-final-form";

import TextFieldComponent from "./index";

const meta: Meta<typeof TextFieldComponent> = {
  title: "Components/Form/TextFieldComponent",
  component: TextFieldComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextFieldComponent>;

const Wrapper = (
  args: React.ComponentProps<typeof TextFieldComponent>
): JSX.Element => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <form>
        <TextFieldComponent {...args} />
      </form>
    )}
  />
);

export const Default: Story = {
  render: () =>
    Wrapper({
      name: "title",
      label: "Titre",
    }),
};

export const PasswordType: Story = {
  render: () =>
    Wrapper({
      name: "password",
      label: "Mot de passe",
      type: "password",
    }),
};

export const Multiline: Story = {
  render: () =>
    Wrapper({
      name: "description",
      label: "Description",
      multiline: true,
    }),
};

export const SelectField: Story = {
  render: () =>
    Wrapper({
      name: "subcategory",
      label: "Sous-catégorie",
      isSelect: true,
      children: [
        <MenuItem key="1" value="1">
          Plantes grasses
        </MenuItem>,
        <MenuItem key="2" value="2">
          Plantes tropicales
        </MenuItem>,
      ],
    }),
};
