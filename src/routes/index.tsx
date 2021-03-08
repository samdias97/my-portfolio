import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
