import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import TopTab from '../../../navigation/topTab';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const HomeWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(TopTab);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default HomeWrapper;