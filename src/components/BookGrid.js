import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import noCoverImg from '../assets/images/no-cover.png';

const BookGrid = ({
  books, onChangeShelf, bookRatings, onChangeRating,
}) => (
  <React.Fragment>
    {books.map(book => (
      <BookItem
        key={book.id}
        id={book.id}
        imageUrl={book.imageLinks && book.imageLinks.thumbnail
          ? book.imageLinks.thumbnail
          : noCoverImg}
        title={book.title}
        authors={book.authors}
        shelf={book.shelf}
        onChangeShelf={onChangeShelf}
        currentRating={bookRatings[book.id] || 0}
        onChangeRating={onChangeRating}
      />
    ))}
  </React.Fragment>
);

BookGrid.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  bookRatings: PropTypes.shape({}).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default BookGrid;
