import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';
import NotFoundBooks from '../components/NotFoundBooks';

export default class App extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  render() {
    const { books } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks books={books} />
          )}
        />
        <Route path="/search" component={SearchBooks} />
        <Route component={NotFoundBooks} />
      </Switch>
    );
  }
}
