import React, { FC, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import Root from '../QFX/src/root';
import SecondHeader from './src/component/Headers/movieTrailerHeader';
import globalStore from './src/redux/store/globalStore';
import { Provider } from 'react-redux';
import { AuthProvider } from './src/context/AuthContext';


/**
* @author Aayu
* @function @App
**/


const App :FC = () => { 
  useEffect(()=>{
    SplashScreen.hide();

  }, [])
 return(
  <AuthProvider>
  <Provider store={globalStore}>
  <Root/>
  </Provider>
  </AuthProvider>
  //<SecondHeader/>
  )
}




export default App;