import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';

const SearchBooks = (props) => {
  const {
    query, searchResults, searchState, onSearchBook, onChangeShelf,
  } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={e => onSearchBook(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {{
          results: <SearchResults searchResults={searchResults} onChangeShelf={onChangeShelf} />,
          noresults: <h3>Search did not return any books. Please try again.</h3>,
          clearresults: <h3>{searchResults}</h3>,
          loading: <h3>Loading...</h3>,
        }[searchState]}
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  query: PropTypes.string.isRequired,
  searchResults: PropTypes.instanceOf(Array).isRequired,
  searchState: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
