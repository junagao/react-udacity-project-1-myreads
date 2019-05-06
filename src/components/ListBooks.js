import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = (props) => {
  const {
    books, onChangeShelf, maxRating, bookRatings, onChangeRating,
  } = props;

  return (
    <React.Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf
          books={books}
          onChangeShelf={onChangeShelf}
          maxRating={maxRating}
          bookRatings={bookRatings}
          onChangeRating={onChangeRating}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </React.Fragment>
  );
};

ListBooks.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  maxRating: PropTypes.number.isRequired,
  bookRatings: PropTypes.instanceOf(Object).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default ListBooks;
