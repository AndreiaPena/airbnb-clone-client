import React from 'react';
import Home from './Home';
import Place from './Place';
import Signup from './Signup';
import Signin from './Signin';

import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/places/:id">
        <Place />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
