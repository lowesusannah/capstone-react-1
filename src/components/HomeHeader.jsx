import React from 'react';
import WebFont from 'webfontloader';

function HomeHeader(){

  WebFont.load({
    google: {
      families: ['Nunito', 'Pt Serif'],
    }
  });

  const styles = {
    containerStyle: {
      borderBox: 'box-border',
      height: '150px',
      width: '100%',
      background: 'linear-gradient(to left, #2F3590, #6C57A1)',
      backgroundSize: 'contain',
      fontFamily: '"Pt Serif", serif',
      fontSize: '20pt',
      color: 'white',
      textAlign: 'center',
      position: 'absolute',
      top: '485px',
      boxShadow: '10px 5px 5px black'
    },
    menuStyle:{
      fontFamily: 'Nunito',
      fontSize: '14pt',
      color: 'white',
      borderBottom: '20px',
      textAlign: 'right'
    }
  };
  return (
    <div style={styles.containerStyle}>
      <h1>a healthy start</h1>
    </div>
  );
}

export default HomeHeader;
