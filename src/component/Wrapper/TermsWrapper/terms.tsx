import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Terms from '../../../screens/DrawerScreens/Terms';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const TermsWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Terms);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default TermsWrapper;