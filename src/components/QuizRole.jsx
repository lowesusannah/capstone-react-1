import React from 'react';
import QuizRoleComponent from './QuizRoleComponent';

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
  return (
    <div>
      <hr/>
      {masterQuizRole.map((quiz, index) =>
        <QuizRoleComponent
          role={quiz.role}
          key={index}/>
      )}
    </div>
  );
}

export default QuizRole;
