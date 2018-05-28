import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import Show from '../pages/Show/ShowContainer';
import Episode from '../pages/Episode/EpisodeContainer';

const AppRouter = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path="/:episode" component={Episode} />
    </Switch>
  </Main>
);

export default AppRouter;
