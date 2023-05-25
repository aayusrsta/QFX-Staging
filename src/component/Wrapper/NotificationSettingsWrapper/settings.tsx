import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Notif from '../../../screens/LoginDrawerScreens/NotificationSettings';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const SettingsWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Notif);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default SettingsWrapper;