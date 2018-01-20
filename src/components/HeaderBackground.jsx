import React from 'react';
import WebFont from 'webfontloader';

function HeaderBackground(){

  WebFont.load({
    google: {
      families: ['Nunito', 'Pt Serif'],
    }
  });

  const styles = {
    containerStyle: {
      borderBox: 'box-border',
      height: '100px',
      width: '100%',
      background: 'linear-gradient(to left, #2F3590, #6C57A1)',
      backgroundSize: 'contain',
      fontFamily: '"Pt Serif", serif',
      fontSize: '14pt',
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      top: '70px',
      display: 'inline-block'
    },
  };
  return (
    <div style={styles.containerStyle}>
      <h1>a healthy start</h1>
    </div>
  );
}

export default HeaderBackground;
