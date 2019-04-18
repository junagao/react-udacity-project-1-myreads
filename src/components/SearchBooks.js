import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import ClearSearchResults from './ClearSearchResults';
import LoadingSearch from './LoadingSearch';

const SearchBooks = (props) => {
  const {
    query, searchResults, searchState, onSearchBook, onChangeShelf,
  } = props;

  return (
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
          results: <SearchResults searchResults={searchResults} onChangeShelf={onChangeShelf} />,
          noSearchResults: <NoSearchResults />,
          clearSearchResults: <ClearSearchResults searchResults={searchResults} />,
          loadingSearch: <LoadingSearch />,
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
