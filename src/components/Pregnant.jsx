import React from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function Pregnant(){
  const Style = {
    bodyStyledComponent: {
      height: '500px',
      width: '67vw',
      backgroundColor: 'white'
    }
  };

  return(
    <div style={Style.bodyStyledComponent}>
      <Modal />
    </div>
  );
}

export default Pregnant;
