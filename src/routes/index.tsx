import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from './Route';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
