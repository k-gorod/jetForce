import {
  takeEvery, put, call, select, PutEffect, SelectEffect, CallEffect,
} from 'redux-saga/effects';

import { RootState } from '@redux';

import { setError } from '@redux/appState';
import { swapiQuery } from 'query';
import { ContentStateType, ErrorResponse, SwapiPeopleResponse } from 'types';
import { getQueryParams } from 'utils';

import { setItemList, setSearchResultsCount } from '.';

type getContentControllerType = Generator<
CallEffect<any> |
SelectEffect |
PutEffect<{ payload: any; type: string }>
>

function* getContentController(): getContentControllerType {
  try {
    const contentInfo: ContentStateType | unknown = yield select((state: RootState) => state.content);

    const { searchQuery, currentPage } = contentInfo as ContentStateType;

    searchQuery ? `?search=${searchQuery}` : '';
    const response: SwapiPeopleResponse | ErrorResponse = yield call(() => swapiQuery(`https://swapi.dev/api/people/${getQueryParams(searchQuery, currentPage)}`));

    yield put(setItemList(response.results));
    yield put(setSearchResultsCount(response.count));
  } catch (err: ErrorResponse) {
    yield put(setError(err.message || null));
  }
}

function* contentSaga() {
  yield takeEvery('content/getItemList', getContentController);
}

export default contentSaga;
