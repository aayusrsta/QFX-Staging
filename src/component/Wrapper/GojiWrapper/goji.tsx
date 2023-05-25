import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import GojiLoyalty from '../../../screens/DrawerScreens/GojiLoyalty';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const GojiWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(GojiLoyalty);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default GojiWrapper;