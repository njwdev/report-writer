import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
