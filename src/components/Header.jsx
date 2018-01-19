import React from 'react';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import wall from '../assets/images/wall.jpg';

function Header(){

  WebFont.load({
    google: {
      families: ['Nunito', 'Pt Serif'],
    }
  });

  const styles = {
    containerStyle: {
      background: 'linear-gradient(to left, #2F3590, #6C57A1)',
      backgroundSize: 'cover',
      paddingTop: '50px',
      textAlign: 'center',
      fontFamily: '"Pt Serif", serif',
      fontSize: '48pt',
      color: 'white'
    },
    bodyStyle:{
      fontFamily: 'Nunito',
      fontSize: '20px',
      color: 'blue',
    }
  };
  return (
    <div style={styles.containerStyle}>
      <h1>a healthy start</h1>
      <Link style={styles.bodyStyle} to="/">Home</Link> | <Link style={styles.bodyStyle} to="/quizrole">Take Quiz</Link>
    </div>
  );
}

export default Header;
