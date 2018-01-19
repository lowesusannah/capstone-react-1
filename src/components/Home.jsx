import React from 'react';
import momandson from '../assets/images/momandson.jpg';


function Home(){
  let myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
  };

  return(
    <div style={myStyledComponentStyles}>
      <img src={momandson}/>
    </div>
  );
}

export default Home;
