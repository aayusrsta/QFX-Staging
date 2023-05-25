import {
    REQUEST_COMINGSOON,
    RECEIVE_COMINGSOON,
    RECEIVE_COMINGSOON_ERROR,
  } from '../types/ComingSoonTypes';
  
  import {GET} from '../../services/Get';
  import {call, put, takeEvery} from 'redux-saga/effects';
   
  const comingSoonApi=async()=>{
      const response =await GET('api/public/ComingSoon');
      return response.data.data;
  }
  
  
  function* comingSoonFetch():any {
      try{
          const comingSoon=yield call(comingSoonApi);
          yield put({type:RECEIVE_COMINGSOON,payload:comingSoon})
      }catch(error){
          console.log("error=",error)
      }
  
  }
  
  function* comingSoonSaga(): any {
    yield takeEvery(REQUEST_COMINGSOON, comingSoonFetch);
  }
  
  export default comingSoonSaga;