import React from 'react';
import Modal from './Modal';


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
      <Modal>
      </Modal>
    </div>
  );
}

export default Pregnant;
