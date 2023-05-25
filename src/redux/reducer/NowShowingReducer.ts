import {
  REQUEST_NOWSHOWING,
  RECEIVE_NOWSHOWING,
  RECEIVE_NOWSHOWING_ERROR,
} from '../types/NowShowingType';

let initialState = {
  isFetching: false,
  nowShowingData: [],
  error: null,
};

const nowShowingReducer = (
  state = initialState,
  action: {type: any; payload: any; error: any},
) => {
  switch (action.type) {
    case REQUEST_NOWSHOWING:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_NOWSHOWING:
      return {
        ...state,
        nowShowingData: action.payload,
        isFetching: false,
        error: null,
      };
    case RECEIVE_NOWSHOWING_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default nowShowingReducer;
