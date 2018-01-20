import React from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';

function TakeQuizButton(){

  WebFont.load({
    google: {
      families: ['Nunito'],
    }
  });

  const styles = {
    textStyle: {
      fontFamily: '"Nunito", sans-serif',
      fontSize: '14pt',
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      textDecoration: 'none'
    },
    containerStyle: {
      borderBox: 'box-border',
      height: '50px',
      width: '60vw',
      backgroundImage: 'radial-gradient(#95F9AA, #34AF4E)',
      boxShadow: '3px 2px 2px black',
      borderRadius: '3px',
      padding: '10px',
      display: 'inline-block',
      marginTop: '700px',
      zIndex: '1000',
      marginLeft: '15vw'
    }
  };
  return (
    <div style={styles.containerStyle}>
      <Link style={styles.textStyle} to="/QuizRole">
        <h2 style={styles.textStyle}>Take Quiz</h2>
      </Link>
    </div>
  );
}

export default TakeQuizButton;
