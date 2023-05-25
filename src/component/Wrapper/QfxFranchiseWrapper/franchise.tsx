import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/QfxFranchise/customQfxFranchiseHeader';

import Franchise from '../../../screens/DrawerScreens/Franchise';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const FranchiseWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Franchise);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default FranchiseWrapper;
