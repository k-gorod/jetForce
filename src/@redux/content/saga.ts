/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { takeEvery, put, call } from 'redux-saga/effects';

import { setItemList } from '.';
import { setError } from '../appState';

function* getContentController(): Generator<any> { // TODO remove any type
  try {
    const contentList = yield call(() => fetch('https://swapi.dev/api/people/').then((res) => res.json()));
    yield put(setItemList((contentList as { results : any }).results));
  } catch (err: any) { // TODO remove any type
    yield put(setError(err.message || null));
  }
}

function* contentSaga() {
  yield takeEvery('content/getItemList', getContentController);
}

export default contentSaga;
