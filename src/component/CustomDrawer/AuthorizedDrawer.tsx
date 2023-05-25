import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../../assets/colors';
import Button from '../Button/button';
import Ant from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
interface IProps {}

/**
 * @author Aayu
 * @function @CustomDrawer
 **/

const CustomAuthDrawer = (props: any) => {
  //const {logout}:any= useContext(AuthContext);
  const navigation: any = useNavigation();

  const logout = () => {
    navigation.navigate('Homes');
  };

  const {container} = styles;
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: colors.drawerNavBackground,
      }}>
      <View
        style={{
          backgroundColor: 'grey',
          height: 90,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, color: colors.primary}}>Aayu Shrestha</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 10,
        }}
        onPress={() => {
          logout();
        }}>
        <View
          style={{
            borderRadius: 100,
            borderColor: 'gray',
            backgroundColor: colors.gray,
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}>
          <Ant name="logout" size={30} />
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'gray',
            fontWeight: '800',
            marginLeft: 10,
          }}>
          Logout
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomAuthDrawer;
