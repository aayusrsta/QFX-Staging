import React, {useMemo} from 'react';
import CustomHeader from '../../HOC/CustomHeader/HomeScreen/CustomHeader'; 
import Contact from '../../../screens/LoginDrawerScreens/Contact';

/**
 * @author Aayu
 * @function @ContactWrapper
 **/

const ContactWrapper = () => {
  const Header = useMemo(() => {
    return CustomHeader(Contact);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default ContactWrapper;