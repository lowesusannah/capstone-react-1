import React from 'react';
import HeaderBackground from './HeaderBackground';


function Household(){
  const Style = {
    bodyStyledComponent: {
      height: '500px',
      width: '100vw',
    }
  };

  return(
    <div style={Style.bodyStyledComponent}>
      <HeaderBackground/>
    </div>
  );
}

export default Household;
