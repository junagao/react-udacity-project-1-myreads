import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookGrid = ({
  books, onChangeShelf, maxRating, bookRatings, onChangeRating,
}) => (
  <React.Fragment>
    {books.map(book => (
      <BookItem
        key={book.id}
        id={book.id}
        imageUrl={book.imageLinks.thumbnail}
        title={book.title}
        authors={book.authors}
        shelf={book.shelf}
        onChangeShelf={onChangeShelf}
        maxRating={maxRating}
        bookRatings={bookRatings}
        onChangeRating={onChangeRating}
      />
    ))}
  </React.Fragment>
);

BookGrid.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  maxRating: PropTypes.number.isRequired,
  bookRatings: PropTypes.instanceOf(Object).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default BookGrid;
