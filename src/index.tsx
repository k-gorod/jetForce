/* eslint-disable comma-dangle */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './components/App';

import 'index.scss';
import store from './@redux';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
