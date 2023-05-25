import {
    RECEIVE_CINEMAS,
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS_ERROR
} from '../types/CinemasTypes'

export const requestCinemasApi = () => ({
    type: REQUEST_CINEMAS
    
  });
  export const receive = (payload: any) => ({
    type: RECEIVE_CINEMAS,
    payload,
  });
  export const receiveSuccess = (payload:any) => ({
    type: RECEIVE_CINEMAS_ERROR,
    payload,
  });