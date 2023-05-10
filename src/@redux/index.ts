/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import appStateReducer from '@redux/appState';
import contentReducer from '@redux/content';

import contentSaga from './content/saga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    content: contentReducer,
  },
  middleware: [saga],
});

saga.run(contentSaga);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
