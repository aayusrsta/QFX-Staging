import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/TrailerScreen/customTrailerHeader'; 
import Trailer from '../../../screens/TrailerScreen/TrailerScreen';

/**
 * @author Aayu
 * @function @HomeWrapper
 **/

const TrailerWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Trailer);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default TrailerWrapper;