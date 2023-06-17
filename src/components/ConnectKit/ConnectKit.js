import React from 'react';
// import 'sudofy-design-kit1/dist/index.css';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { theme as defaultTheme } from 'theme/theme';

let nestedassign = (target = {}, source = {}) => {
  try {
    Object.keys(source).forEach((sourcekey) => {
      if (
        Object.keys(source).find((targetkey) => targetkey === sourcekey) !==
          undefined &&
        typeof source[sourcekey] === 'object'
      )
        target[sourcekey] = nestedassign(target[sourcekey], source[sourcekey]);
      else target[sourcekey] = source[sourcekey];
    });
    return target;
  } catch (err) {
    console.error(err);
    return {};
  }
};

function ConnectKit({ children, theme }) {
  try {
    let newTheme = { ...defaultTheme };
    if (theme) newTheme = nestedassign(defaultTheme, theme);

    return (
      <div className='sudofy-design-kit-wrapper'>
        <ThemeProvider theme={newTheme}>{children}</ThemeProvider>
      </div>
    );
  } catch (err) {
    console.error("Design kit connection failed.\n", err);
    return <div>{children}</div>
  }
}

ConnectKit.prototype = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ConnectKit;
