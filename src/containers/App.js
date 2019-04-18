import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';
import BooksNotFound from '../components/BooksNotFound';
import './App.scss';

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

  changeShelf = (bookToChangeId, newShelf) => {
    const { books } = this.state;
    const bookToChange = books.filter(book => book.id === bookToChangeId)[0];
    bookToChange.shelf = newShelf;
    BooksAPI.update(bookToChange, newShelf)
      .then(() => this.fetchBooks());
  };

  render() {
    const { books } = this.state;

    return (
      <React.Fragment>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ListBooks books={books} onChangeShelf={this.changeShelf} />
              )}
            />
            <Route path="/search" component={SearchBooks} />
            <Route component={BooksNotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
