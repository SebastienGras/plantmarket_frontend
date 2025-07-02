import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./index";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      <Footer />
    </Box>
  ),
};
