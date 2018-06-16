import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import TypeSelector from './components/typeSelector';
import PlanSelector from './components/planSelector';
import Plan from './components/plan';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/plan/:serviceType/:planId/:type?" component={Plan} />
      <Route path="/list/:serviceType" component={PlanSelector} />
      <Route path="/" component={TypeSelector} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
