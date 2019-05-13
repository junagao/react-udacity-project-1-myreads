import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import ClearSearchResults from './ClearSearchResults';
import Loading from './Loading';

const SearchBooks = ({
  query, searchResults, searchState, onSearchBook, onChangeShelf,
  bookRatings, onChangeRating,
}) => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          type="text"
          placeholder="Search by title or author"
          value={query}
          minLength={1}
          debounceTimeout={200}
          onChange={e => onSearchBook(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      {{
        results: <SearchResults
          searchResults={searchResults}
          onChangeShelf={onChangeShelf}
          bookRatings={bookRatings}
          onChangeRating={onChangeRating}
        />,
        noSearchResults: <NoSearchResults />,
        clearSearchResults: <ClearSearchResults searchResults={searchResults} />,
        loadingSearch: <Loading />,
      }[searchState]}
    </div>
  </div>
);

SearchBooks.propTypes = {
  query: PropTypes.string.isRequired,
  searchResults: PropTypes.instanceOf(Array).isRequired,
  searchState: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  bookRatings: PropTypes.instanceOf(Object).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default SearchBooks;
