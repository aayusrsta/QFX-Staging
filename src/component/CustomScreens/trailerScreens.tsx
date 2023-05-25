import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

interface IProps {}

/**
 * @author Aayu
 * @function @
 **/

const TrailerScreens = () => {
  const navigation: any = useNavigation();

  const {container, youtube, nameLine, movieName, icon, ticket, details} =
    styles;
  return (
    <View style={container}>
      <View style={youtube}>
        <Text style={{color:'white', fontSize:50}}>YouTube Player</Text>
      </View>
      <View style={nameLine}>
        <View style={{width: '60%'}}>
          <Text style={movieName}>MOVIE NAME</Text>
          <Text style={movieName}> (ER)</Text>
        </View>

        <TouchableOpacity
          style={{width: '40%', flexDirection: 'row'}}
          onPress={() => navigation.navigate('TicketScreen')}>
          <View style={icon}>
            <Entypo name="ticket" size={20} />
          </View>
          <View>
            <Text style={ticket}>BUY/RESERVE TICKET</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={details}>Genre:</Text>
      <Text style={details}>Runtime:</Text>
      <Text style={details}>Director:</Text>

      <Text style={details}>Cast:</Text>

      <Text style={details}>Language:</Text>
      <Text style={{marginTop: 15, color: colors.primary}}>SYNOPSIS:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    justifyContent: 'center',
    //    alignItems: 'center',
    backgroundColor: colors.background,
  },
  youtube: {
    backgroundColor: 'red',
    height: 250,
    justifyContent: 'center',
     alignItems: 'center',
  },
  nameLine: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieName: {
    color: colors.primary,
    fontSize: 20,
  },
  icon: {
    borderRadius: 100,
    backgroundColor: colors.gray,
    borderColor: 'gray',
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // marginLeft:80,
  },
  ticket: {
    color: colors.primary,
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 5,
  },
  details: {
    marginVertical: 5,
    color: colors.primary,
  },
});
export default TrailerScreens;
