import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';
import NotFoundBooks from '../components/NotFoundBooks';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={ListBooks} />
      <Route path="/search" component={SearchBooks} />
      <Route component={NotFoundBooks} />
    </Switch>
  </div>
);

export default App;
