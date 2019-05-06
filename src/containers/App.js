import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as BooksAPI from '../BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';
import PageNotFound from '../components/PageNotFound';
import './App.scss';

library.add(faHeart);

export default class App extends React.Component {
  state = {
    books: [],
    query: '',
    searchResults: [],
    searchState: '',
    maxRating: 3,
    bookRatings: {},
  }

  componentDidMount() {
    this.fetchBooks();
    this.fetchBookRatings();
  }

  fetchBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }));
  }

  changeShelf = (bookToChangeId, newShelf) => {
    const { books, searchResults } = this.state;
    const allBooks = [...books, ...searchResults];
    const bookToChange = allBooks.filter(book => book.id === bookToChangeId)[0];
    bookToChange.shelf = newShelf;
    BooksAPI.update(bookToChange, newShelf)
      .then(() => this.fetchBooks());
  };

  handleSearch = (query) => {
    // set state query and searchState to loading
    this.setState({ query, searchState: 'loadingSearch' });

    // if no user input, set searchResults to [] and searchState to 'clearresults'
    if (query === '') {
      this.setState({ searchResults: [''], searchState: 'clearSearchResults' });
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
            this.setState({ searchResults: [], searchState: 'noSearchResults' });
          }
        });
    }
  };

  changeRating = (bookId, rating) => {
    const { bookRatings } = this.state;
    this.setState(state => ({
      bookRatings: {
        ...state.bookRatings,
        [bookId]: rating,
      },
    }));
    window.localStorage.setItem(
      'bookRatings',
      JSON.stringify({
        ...bookRatings,
        [bookId]: rating,
      }),
    );
  }

  fetchBookRatings = () => {
    const ratings = window.localStorage.getItem('bookRatings');
    if (!ratings) {
      window.localStorage.setItem('bookRatings', JSON.stringify({}));
    } else {
      this.setState({ bookRatings: JSON.parse(ratings) });
    }
  }

  render() {
    const {
      books, query, searchResults, searchState, maxRating, bookRatings,
    } = this.state;

    return (
      <React.Fragment>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ListBooks
                  books={books}
                  onChangeShelf={this.changeShelf}
                  maxRating={maxRating}
                  bookRatings={bookRatings}
                  onChangeRating={this.changeRating}
                />
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
                  maxRating={maxRating}
                  bookRatings={bookRatings}
                  onChangeRating={this.changeRating}
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
