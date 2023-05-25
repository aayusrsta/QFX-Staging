import {
  REQUEST_CINEMAS,
  RECEIVE_CINEMAS,
  RECEIVE_CINEMAS_ERROR,
} from '../types/CinemasTypes';

const initialState = {
  isFetching: false,
  cinemasData: [],
  error: null,
};

const cinemasReducer = (
  state = initialState,
  action: {type: any; payload: any; error: any},
) => {
  switch (action.type) {
    case REQUEST_CINEMAS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CINEMAS:
      return {
        ...state,
        cinemasData: action.payload,
        isFetching: false,
        error: null,
      };
    case RECEIVE_CINEMAS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default cinemasReducer;
