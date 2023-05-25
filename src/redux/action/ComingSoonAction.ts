import {
  REQUEST_COMINGSOON,
  RECEIVE_COMINGSOON,
  RECEIVE_COMINGSOON_ERROR,
} from '../types/ComingSoonTypes';

export const requestComingSoonApi = () => ({
  type: REQUEST_COMINGSOON,
});
export const receive = (payload: any) => ({
  type: RECEIVE_COMINGSOON,
  payload,
});
export const receiveSuccess = (payload: any) => ({
  type: RECEIVE_COMINGSOON_ERROR,
  payload,
});
