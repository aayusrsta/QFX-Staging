import React from 'react';
import SecondHeader from '../../../Headers/movieTrailerHeader';
/**
 * @author Aayu
 * @function @HOC
 **/

const HOC =
  (Component: any) =>
  ({props}: any) =>
    (
      <>
        <SecondHeader />
        <Component {...props} />
      </>
    );

export default HOC;
