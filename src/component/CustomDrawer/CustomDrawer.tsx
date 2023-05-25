import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {}

/**
 * @author Aayu
 * @function @CustomDrawer
 **/

const CustomDrawer = (props: any) => {
  const {container} = styles;
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        backgroundColor: colors.drawerNavBackground,
        flex:1
      }}>
      <View style={{backgroundColor: 'grey', height: "18%"}}>
        <Image
          source={require('../../images/logo.png')}
          style={{
            marginHorizontal: 5,
            marginTop: 15,
            height: 100,
            width: 200,
            marginLeft: 33,
          }}
        />
        <Text style={{color: 'white', marginVertical: 10, marginLeft: 180}}>
          @AayuShrestha
        </Text>
      </View>
     

      <DrawerItemList {...props} />
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
export default CustomDrawer;
