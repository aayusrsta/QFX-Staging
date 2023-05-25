import {
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING,
  RECEIVE_NOWSHOWING_ERROR,
} from '../types/NowShowingType';

import {GET} from '../../services/Get';
import {call, put, takeEvery} from 'redux-saga/effects';

const nowShowingApi = async () => {
  const response = await GET('api/public/NowShowing');
  return response.data.data;
};

function* nowShowingFetch(): any {
  try {
    const nowShowing = yield call(nowShowingApi);
    yield put({type: RECEIVE_NOWSHOWING, payload: nowShowing});
  } catch (error) {
    yield put({type: RECEIVE_NOWSHOWING_ERROR, error: error});
  }
}

function* nowShowingSaga(): any {
  yield takeEvery(REQUEST_NOWSHOWING, nowShowingFetch);
}

export default nowShowingSaga;
