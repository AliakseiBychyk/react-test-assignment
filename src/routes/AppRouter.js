import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import Show from '../pages/Show/Show';
import Episode from '../pages/Episode/Episode';

const AppRouter = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path="/:episode" component={Episode} />
    </Switch>
  </Main>
);

export default AppRouter;
