import React from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';

function Modal(){

  WebFont.load({
    google: {
      families: ['Nunito'],
    }
  });

  const styles = {
    containerStyle: {
      borderBox: 'box-border',
      height: '150px',
      width: '500px',
      backgroundImage: 'radial-gradient(to left, #2F3590, #6C57A1)',
      backgroundSize: 'contain',
      fontFamily: '"Nunito", sans-serif',
      fontSize: '14pt',
      textAlign: 'center',
      boxShadow: '5px 3px 2px black',
      zIndex: '1000'
    },
  };
  return (
    <div style={styles.containerStyle}>
      <Link to="/pregnant"> Pregnant</Link>
    </div>
  );
}

export default Modal;
