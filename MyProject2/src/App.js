// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrainsPage} /> 
        <Route exact path="/single-train" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
};

export default App;

