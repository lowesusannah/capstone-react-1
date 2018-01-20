import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


function Header(){
  const styles = {
    containerStyle: {
      height: '100px',
      backgroundColor: 'white'
    },
  };
  return (
    <div style={styles.containerStyle}>
      <Logo/>
      <Link style={styles.menuStyle} to="/">Home</Link> | <Link style={styles.menuStyle} to="/quizrole">Take Quiz</Link>
    </div>
  );
}

export default Header;
