import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';
import PageNotFound from '../components/PageNotFound';
import './App.scss';

export default class App extends React.Component {
  state = {
    books: [],
    query: '',
    searchResults: [],
    searchState: '',
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

  handleSearch = (query) => {
    // set state query and searchState to loading
    this.setState({ query, searchState: 'loading' });

    // if no user input, set searchResults to [] and searchState to 'clearresults'
    if (query === '') {
      this.setState({ searchResults: [''], searchState: 'clearresults' });
    }

    // if there is a user input, do the search and set the search results to searchResults
    if (query) {
      BooksAPI.search(query.trim())
        .then((searchResults) => {
          if (Array.isArray(searchResults)) {
            searchResults.map((book) => {
              const { books } = this.state;
              const matchedBook = books.find(b => b.id === book.id);
              const bookToChange = book;
              bookToChange.shelf = matchedBook ? matchedBook.shelf : 'none';
              return book;
            });
            this.setState({ searchResults, searchState: 'results' });
          } else {
            this.setState({ searchResults: [], searchState: 'noresults' });
          }
        });
    }
  };

  render() {
    const {
      books, query, searchResults, searchState,
    } = this.state;

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
            <Route
              path="/search"
              render={() => (
                <SearchBooks
                  query={query}
                  searchResults={searchResults}
                  searchState={searchState}
                  onSearchBook={this.handleSearch}
                  onChangeShelf={this.changeShelf}
                />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
