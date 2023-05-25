import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const Location = () => {
  return (
    <View style={styles.container}>
    <View style={styles.location}>
    <Text style={{color: colors.cinemasNameText, fontSize: 25}}>
      Location
    </Text>
  </View>
  </View>
  )
}

export default Location;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:25,
    backgroundColor:colors.background
  },
  location: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    height: '6%',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
})