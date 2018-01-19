import React from 'react';
import Home from './Home';
import QuizRole from './QuizRole';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quizrole' component={QuizRole} />
      </Switch>
    </div>
  );
}

export default App;
