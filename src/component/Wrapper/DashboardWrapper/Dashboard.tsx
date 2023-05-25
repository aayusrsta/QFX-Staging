import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Dashboard from '../../../screens/LoginDrawerScreens/Dashboard';
/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const DashboardWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Dashboard);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default DashboardWrapper;