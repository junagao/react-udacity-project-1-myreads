import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = ({
  books, loadingBooks, onChangeShelf, bookRatings, onChangeRating,
}) => (
  <React.Fragment>
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelf
        books={books}
        loadingBooks={loadingBooks}
        onChangeShelf={onChangeShelf}
        bookRatings={bookRatings}
        onChangeRating={onChangeRating}
      />
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </React.Fragment>
);

ListBooks.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  loadingBooks: PropTypes.bool.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  bookRatings: PropTypes.shape({}).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default ListBooks;
