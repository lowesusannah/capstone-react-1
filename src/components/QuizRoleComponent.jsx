import React from 'react';
import PropTypes from 'prop-types';

function QuizRoleComponent(props){
  return(
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

QuizRoleComponent.propTypes={
  name: PropTypes.string.isRequired,
};

export default QuizRoleComponent;
