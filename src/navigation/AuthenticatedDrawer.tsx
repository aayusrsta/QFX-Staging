import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import TopTab from './topTab';
import Login from '../screens/Login';
import Register from '../screens/DrawerScreens/Register';
import Location from '../screens/DrawerScreens/Location';
import GojiLoyalty from '../screens/DrawerScreens/GojiLoyalty';
import Terms from '../screens/DrawerScreens/Terms';
import Help from '../screens/DrawerScreens/Help';
import Franchise from '../screens/DrawerScreens/Franchise';
import HomeWrapper from '../component/Wrapper/HomeWrapper/Home';
import CustomAuthDrawer from '../component/CustomDrawer/AuthorizedDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';
import Contacts from 'react-native-vector-icons/Fontisto';
import Note from 'react-native-vector-icons/SimpleLineIcons';
import Headphone from 'react-native-vector-icons/MaterialIcons';
import Alien from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import Support from '../screens/DrawerScreens/Support';
import Button from '../component/Button/button';
import {Text} from 'react-native-svg';
import Contact from '../screens/LoginDrawerScreens/Contact';
import Notif from '../screens/LoginDrawerScreens/NotificationSettings';
import MyProfile from '../screens/LoginDrawerScreens/MyProfile';
import MyProfileWrapper from '../component/Wrapper/MyProfileWrapper/MyProfile';
import Dashboard from '../screens/LoginDrawerScreens/Dashboard';
import SupportWrapper from '../component/Wrapper/SupportWrapper/Support';
import FranchiseWrapper from '../component/Wrapper/QfxFranchiseWrapper/franchise';
import DashboardWrapper from '../component/Wrapper/DashboardWrapper/Dashboard';
import LocationWrapper from '../component/Wrapper/LocationWrapper/Location';
import SettingsWrapper from '../component/Wrapper/NotificationSettingsWrapper/settings';
import GojiWrapper from '../component/Wrapper/GojiWrapper/goji';
import TermsWrapper from '../component/Wrapper/TermsWrapper/terms';
import ContactWrapper from '../component/Wrapper/ContactWrapper/contact';
import HelpWrapper from '../component/Wrapper/HelpWrapper/help';

const Drawer = createDrawerNavigator();

const AuthDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomAuthDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 17,
          justifyContent: 'space-evenly',
        },
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
        name="Dashboard"
        component={DashboardWrapper}
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
              <Ant name="dashboard" size={30} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="My Profile"
        component={MyProfileWrapper}
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
              <Ionicons name="person-outline" size={30} />
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
        name="Notification Settings"
        component={SettingsWrapper}
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
              <Note name="settings" size={30} />
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
        name="Contact"
        component={ContactWrapper}
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
              <Contacts name="email" size={30} />
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
export default AuthDrawer;
