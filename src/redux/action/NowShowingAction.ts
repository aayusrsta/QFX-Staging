import {
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING,
  RECEIVE_NOWSHOWING_ERROR,
} from '../types/NowShowingType';

export const requestApiData = () => ({
  type: REQUEST_NOWSHOWING,
});
export const receive = (payload: any) => ({
  type: RECEIVE_NOWSHOWING,
  payload,
});
export const receiveSuccess = (payload: any) => ({
  type: RECEIVE_NOWSHOWING_ERROR,
  payload,
});
