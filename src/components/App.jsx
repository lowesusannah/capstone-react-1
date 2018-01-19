import React from 'react';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import QuizRole from './QuizRole';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quizrole' component={QuizRole} />
      </Switch>
    </div>
  );
}

export default App;
