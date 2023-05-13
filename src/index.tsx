/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

import theme from 'materialTheme';

import App from './components/App';

import 'index.scss';
import store from './@redux';

import { Provider } from 'react-redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';

const root = createRoot(document.getElementById('root')!);

root.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
);
