import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react-vite";
import { JSX } from "react";

import theme from "../src/theme";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story): JSX.Element => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
