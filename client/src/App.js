import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/Home';
import NavPage from './pages/NavBar';
import ExperiencePage from './pages/Exp';
import EducationPage from './pages/Edu';
import AwardsPage from './pages/Awards';
import ErrorPage from './pages/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/" 
          render={ (props) => (<NavPage {...props} />) } 
        />
        <Route
          exact path="/experience" 
          render={ (props) => (<ExperiencePage {...props} />) } 
        />
        <Route
          exact path="/education" 
          render={ (props) => (<EducationPage {...props} />) } 
        />
        <Route
          exact path="/awards" 
          render={ (props) => (<AwardsPage {...props} />) } 
        />
        <Route path="*" component={ ErrorPage } />
      </Switch>
    </div>
  );
}

export default App;
