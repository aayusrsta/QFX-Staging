import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Location from '../../../screens/DrawerScreens/Location';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const LocationWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Location);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default LocationWrapper;