import React from 'react';
import wiclogo from '../assets/images/wiclogo.png';
import { Link } from 'react-router-dom';

function Logo(){
  const styles = {
    containerStyle: {
      height: '0px',
      overflow: 'show'
    },
    imageStyle: {
      height: '50px'    }
  };
  return (
    <div style={styles.containerStyle}>
      <Link to="/"><img style={styles.imageStyle} src={wiclogo}/></Link>
    </div>
  );
}
export default Logo;
