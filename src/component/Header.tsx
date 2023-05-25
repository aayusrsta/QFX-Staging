import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import {useNavigation} from '@react-navigation/native';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

const Header: FC<IProps> = props => {
  const navigation = useNavigation();
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  const {bar, image, location, LocationText, icon1, icon2, icon3} = styles;
  return (
    <View style={bar}>
      <TouchableOpacity style={icon1} onPress={toggleDrawer}>
        <Ionicons name="menu-outline" size={30} color={colors.iconColor} />
      </TouchableOpacity>
      <View style={styles.imageee}>
        <Image style={image} source={require('../images/loginHeader.png')} />
      </View>
      <View style={{width: '15%'}}></View>
      <View style={icon2}>
        <Ionicons name="location-outline" size={30} color={colors.iconColor} />
      </View>
      <TouchableOpacity style={location}>
        <Text style={styles.LocationText}>Select Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={icon3}>
        <Feather name="bell" size={30} color={colors.iconColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'black',
    height: '6%',
    flexDirection: 'row',
  },
  icon1: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon3: {
    width:'10%',
    justifyContent:'center',
    alignItems:'center'
  },
  imageee: {
    width: '20%',
    height: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  location: {
    borderBottomWidth: 1,
    borderBottomColor: colors.iconColor,
    width: '35%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LocationText: {
    color: 'white',
    paddingVertical: 5,
    fontSize: 20,
    paddingTop: 10,
  },
});

export default Header;
