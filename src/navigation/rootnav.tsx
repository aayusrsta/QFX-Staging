import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, { useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './stacknav';
//import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';

const RootNav = () => {
  //const {isLoading, userToken}:any= useContext(AuthContext);

  // if(isLoading){
  //   return(
  //   <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
  //     <ActivityIndicator size={'large'}/>
  //   </View>
  //   );
  // }
  return (
    <NavigationContainer>
      {/* {userToken!== null?<AuthStack/> :<MyStack/> } */}
    <MyStack/>
            {/* <AuthStack/> */}
    </NavigationContainer>
  );
};

export default RootNav;

const styles = StyleSheet.create({});
