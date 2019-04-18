import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookGrid = (props) => {
  const { books } = props;

  return (
    <React.Fragment>
      {books.map(book => (
        <BookItem
          key={book.id}
          id={book.id}
          imageUrl={book.imageLinks.thumbnail}
          title={book.title}
          authors={book.authors}
          shelf={book.shelf}
        />
      ))}
    </React.Fragment>
  );
};

BookGrid.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookGrid;
