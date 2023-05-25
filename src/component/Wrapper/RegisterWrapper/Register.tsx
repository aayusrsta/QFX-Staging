import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/Register/customRegister';

import Register from '../../../screens/DrawerScreens/Register';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const RegisterWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Register);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default RegisterWrapper;
