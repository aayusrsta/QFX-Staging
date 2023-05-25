import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/MyProfile/customMyProfileHeader';

import MyProfile from '../../../screens/LoginDrawerScreens/MyProfile';
/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const MyProfileWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(MyProfile);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default MyProfileWrapper;
