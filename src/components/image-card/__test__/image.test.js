import React from "react";
import { render } from "@testing-library/react";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import ImageCard from "..";
import '@testing-library/jest-dom/extend-expect'

test("test to match snapshot", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ImageCard />
      </ThemeProvider>
    );
    const imageCard = getByTestId('image-card')
    expect(imageCard).toMatchSnapshot()
});
  