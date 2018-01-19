import React from 'react';
import momandson from '../assets/images/momandson.jpg';
import HomeHeader from './HomeHeader';

function Home(){
  const Style = {
    bodyStyledComponent: {
      height: '500px',
      width: '100vw',
      backgroundImage: `url(${momandson})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      zIndex: '-1000',
      overflow: 'hidden'
    }
  };

  return(
    <div style={Style.bodyStyledComponent}>
      <HomeHeader/>
    </div>
  );
}

export default Home;
