import React from 'react';
import QuizRoleComponent from './QuizRoleComponent';

var masterQuizRole = [
  {
    name: 'Expecting a child',
  },
  {
    name: 'A parent or guardian',
  },
  {
    name: 'Interested in helping a parent or guardian, by taking quiz to see if they\'d qualify',
  }
];

function QuizRole(){
  return (
    <div>
      <hr/>
      {masterQuizRole.map((profile, index) =>
        <QuizRoleComponent
          name={profile.name}
          key={index}/>
      )}
    </div>
  );
}

export default QuizRole;
