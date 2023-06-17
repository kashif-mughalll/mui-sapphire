import React from "react";
import SudofyTheme from '../src/theme/SudofyTheme/SudofyTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <SudofyTheme>
      <Story />
    </SudofyTheme>
  ),
];