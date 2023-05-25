import React from 'react';
import Header from '../../../Header';
/**
 * @author Aayu
 * @function @HOC
 **/

const HOC =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <Header />
        <Component {...props} />
      </>
    );

export default HOC;
