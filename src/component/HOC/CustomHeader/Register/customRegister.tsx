import React from 'react';
import AllHeader from '../../../Headers/allHeader';
/**
 * @author Aayu
 * @function @HOC
 **/

const HOC =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <AllHeader title="Register" />
        <Component {...props} />
      </>
    );

export default HOC;
