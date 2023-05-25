import {
    REQUEST_COMINGSOON,
    RECEIVE_COMINGSOON,
    RECEIVE_COMINGSOON_ERROR,
  } from '../types/ComingSoonTypes';
  
  const initialState = {
    isFetching: false,
    comingSoonData: [],
    error:null
  };  
  
  const comingSoonReducer = (
    state = initialState,
    action: {type: any; payload: any; error:any},
  ) => {
    switch (action.type) {
      case REQUEST_COMINGSOON:
        return {
          ...state,
          isFetching: true,
        };
      case RECEIVE_COMINGSOON:
        return {
          ...state,
          comingSoonData: action.payload,
          isFetching:false,
          error:null
        };
      case RECEIVE_COMINGSOON_ERROR:
        return {
          ...state,
          isFetching: false,
          error:action.error
        };
      default:
        return state;
    }
  };
  export default comingSoonReducer;
