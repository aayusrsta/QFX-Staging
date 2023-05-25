import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NowShowing from '../screens/Home/NowShowing';
import NextChange from '../screens/Home/Cinemas';
import ComingSoon from '../screens/Home/ComingSoon';
import colors from '../assets/colors';
const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.cinemasNameText,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: colors.cinemasNameText},
        tabBarStyle: {backgroundColor: colors.background},
      }}>
      <Tab.Screen name="Now Showing" component={NowShowing} />
      <Tab.Screen name="Coming Soon" component={ComingSoon} />
      <Tab.Screen name="Cinemas" component={NextChange} />
    </Tab.Navigator>
  );
};
export default TopTab;
