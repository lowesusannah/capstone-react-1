import React from 'react';
import PropTypes from 'prop-types';

function QuizRoleComponent(props){
  return(
    <div>
      <h3>{props.role}</h3>
    </div>
  );
}

QuizRoleComponent.propTypes={
  role: PropTypes.string.isRequired,
};

export default QuizRoleComponent;
