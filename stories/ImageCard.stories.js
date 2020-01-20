import React from "react";
import ImageCard from '../src/components/image-card'
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import '../src/styles/utils.css'
import '../src/styles/index.css'
export const imageCard = () => (
    <ThemeProvider theme={theme}>
      <ImageCard  />
    </ThemeProvider>
  );

export default {
    title: "ImageCard",
    decorators: [withKnobs]
};
  