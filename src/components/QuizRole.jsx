import React from 'react';
import QuizRoleComponent from './QuizRoleComponent';
import HeaderBackground from './HeaderBackground';
import WebFont from 'webfontloader';
import { Link } from 'react-router-dom';


var masterQuizRole = [
  {
    role: 'Expecting a child',
  },
  {
    role: 'A parent or guardian',
  },
  {
    role: 'Interested in helping a parent or guardian, by taking quiz to see if they\'d qualify',
  }
];

function QuizRole(){
  WebFont.load({
    google: {
      families: ['Nunito', 'Pt Serif'],
    }
  });

  const styles = {
    headerStyle: {
      fontFamily: '"Nunito", san-serif',
      fontSize: '24pt',
      color: '2F3590',
      marginTop: '200px',
    },
    containerStyle: {
      marginTop: '10px',
      borderBox: 'box-border',
      backgroundColor: 'blue',
      fontFamily: '"Nunito", san-serif',
      fontSize: '14pt',
      display: 'inline-block',
      height: '50px',
      width: '60vw',
      backgroundImage: 'radial-gradient(#95F9AA, #34AF4E)',
      boxShadow: '3px 2px 2px grey',
      borderRadius: '3px',
      paddingTop: '5px',
      paddingLeft: '5px',
      paddingRight: '5px',
      paddingBottom: '15px',
      zIndex: '1000',
      marginLeft: '15vw',
      textAlign: 'center'
    },
  };

  return (
    <div>
      <HeaderBackground />
      <h1 style={styles.headerStyle}>I am...</h1>
      <Link to="/Pregnant">
        <div style={styles.containerStyle}>
          {masterQuizRole.map((quiz, index) =>
            <QuizRoleComponent
              role={quiz.role}
              key={index}/>
          )}
        </div>
      </Link>
    </div>
  );
}

export default QuizRole;
