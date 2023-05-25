import {
    REQUEST_CINEMAS,
    RECEIVE_CINEMAS,
    RECEIVE_CINEMAS_ERROR,
  } from '../types/CinemasTypes';
  
  import {GET} from '../../services/Get';
  import {call, put, takeEvery} from 'redux-saga/effects';
   
  const cinemasApi=async()=>{
      const response =await GET('api/public/Cinemas');
      return response.data.data;
  }
  
  
  function* cinemasFetch():any {
      try{
          const comingSoon=yield call(cinemasApi);
          yield put({type:RECEIVE_CINEMAS,payload:comingSoon})
      }catch(error){
          console.log("error=",error)
      }
  
  }
  
  function* cinemasSaga(): any {
    yield takeEvery(REQUEST_CINEMAS, cinemasFetch);
  }
  
  export default cinemasSaga;