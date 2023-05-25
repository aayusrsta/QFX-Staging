import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {}

/**
* @author
* @function @
**/


 const  Dashboard = () => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Dashboard</Text>
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
 export default Dashboard;