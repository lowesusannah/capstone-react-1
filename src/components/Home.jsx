import React from 'react';
import momandson from '../assets/images/momandson.jpg';
import HomeHeader from './HomeHeader';
import TakeQuizButton from './TakeQuizButton';

function Home(){
  const Style = {
    bodyStyledComponent: {
      height: '500px',
      width: '100vw',
      backgroundImage: `url(${momandson})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  };

  return(
    <div style={Style.bodyStyledComponent}>
      <HomeHeader/>
      <TakeQuizButton />
    </div>
  );
}

export default Home;
