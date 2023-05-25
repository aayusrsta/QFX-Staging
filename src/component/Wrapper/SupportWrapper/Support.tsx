import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/Support/customSupportHeader';

import Support from '../../../screens/DrawerScreens/Support';
/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const SupportWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Support);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default SupportWrapper;
