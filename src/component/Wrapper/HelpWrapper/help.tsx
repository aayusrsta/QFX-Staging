import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Help from '../../../screens/DrawerScreens/Help';

/**
 * @author Aayu
 * @function @HelpWrapper
 **/

const HelpWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Help);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HelpWrapper;