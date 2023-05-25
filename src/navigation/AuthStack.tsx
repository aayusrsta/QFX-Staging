import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyDrawer from './drawer';
import TicketScreen from '../screens/ShowSelectionScreen/ShowSelection';
import TrailerWrapper from '../component/Wrapper/TrailerWrapper/Trailer';
import Register from '../screens/DrawerScreens/Register';
import AuthDrawer from './AuthenticatedDrawer';
import RegisterWrapper from '../component/Wrapper/RegisterWrapper/Register';

interface IProps {}

/**
 * @author Aayu
 * @function @
 **/
const Stack = createStackNavigator();

const MyStack: FC<IProps> = props => {
  const {container} = styles;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homes" component={AuthDrawer} />
      <Stack.Screen name="Trailer" component={TrailerWrapper} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} />
      {/* <Stack.Screen name="Register" component={RegisterWrapper} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyStack;
