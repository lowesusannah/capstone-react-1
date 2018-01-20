import React from 'react';
import Home from './Home';
import QuizRole from './QuizRole';
import Logo from './Logo';
import Pregnant from './Pregnant';
import Household from './Household';
import { Switch, Route } from 'react-router-dom';

function App(){
  const styles = {
    containerStyle: {
      boxSizing: 'border-box'
    }
  };

  return (
    <div styles={styles.containerStyle}>
      <Logo/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/quizrole' component={QuizRole} />
        <Route path='/pregnant' component={Pregnant} />
        <Route path='/household' component={Household}/>
      </Switch>
    </div>
  );
}

export default App;
