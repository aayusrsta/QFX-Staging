import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {}

/**
* @author
* @function @
**/


 const  Notif = () => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Notification</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
});
 export default Notif;