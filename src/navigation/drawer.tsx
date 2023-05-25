import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import React from 'react';
import HomeWrapper from '../component/Wrapper/HomeWrapper/Home';
import CustomDrawer from '../component/CustomDrawer/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';
import Note from 'react-native-vector-icons/SimpleLineIcons';
import Headphone from 'react-native-vector-icons/MaterialIcons';
import Alien from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import LoginWrapper from '../component/Wrapper/LoginWrapper/Login';
import RegisterWrapper from '../component/Wrapper/RegisterWrapper/Register';
import SupportWrapper from '../component/Wrapper/SupportWrapper/Support';
import FranchiseWrapper from '../component/Wrapper/QfxFranchiseWrapper/franchise';
import LocationWrapper from '../component/Wrapper/LocationWrapper/Location';
import GojiWrapper from '../component/Wrapper/GojiWrapper/goji';
import TermsWrapper from '../component/Wrapper/TermsWrapper/terms';
import HelpWrapper from '../component/Wrapper/HelpWrapper/help';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {marginLeft: -20, fontSize: 17},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                backgroundColor: colors.gray,
                borderColor: 'gray',
                borderWidth: 2,
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}>
              <Ionicons name="home-outline" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Login"
        component={LoginWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                borderColor: 'gray',
                backgroundColor: colors.gray,
                borderWidth: 2,
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}>
              <Ant name="login" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Register"
        component={RegisterWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 8,
                backgroundColor: colors.gray,
                paddingHorizontal: 8,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Note name="note" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Locations"
        component={LocationWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 5,
                backgroundColor: colors.gray,
                paddingHorizontal: 5,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Ionicons name="location-outline" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Support"
        component={SupportWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 5,
                backgroundColor: colors.gray,
                paddingHorizontal: 5,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Headphone name="headset-mic" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Goji Loyalty"
        component={GojiWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 5,
                backgroundColor: colors.gray,
                paddingHorizontal: 5,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Alien name="reddit-alien" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Terms & Conditions"
        component={TermsWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 5,
                backgroundColor: colors.gray,
                paddingHorizontal: 5,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Ionicons name="ios-checkbox-outline" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Help"
        component={HelpWrapper}
        options={{
          drawerIcon: () => (
            <View
              style={{
                borderRadius: 100,
                paddingVertical: 5,
                backgroundColor: colors.gray,
                paddingHorizontal: 5,
                borderColor: 'gray',
                borderWidth: 2,
              }}>
              <Ant name="question" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="QFX Francise"
        component={FranchiseWrapper}
        options={{
          drawerIcon: () => <Ionicons name="ribbon-outline" size={40} />,
        }}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
