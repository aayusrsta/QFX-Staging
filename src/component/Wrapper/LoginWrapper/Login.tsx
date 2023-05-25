import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/Login/customLogin';
import Trailer from '../../../screens/TrailerScreen/TrailerScreen';
import Login from '../../../screens/Login';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const LoginWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Login);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default LoginWrapper;
