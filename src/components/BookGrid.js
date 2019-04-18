import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookGrid = (props) => {
  const { books, onChangeShelf } = props;

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
          onChangeShelf={onChangeShelf}
        />
      ))}
    </React.Fragment>
  );
};

BookGrid.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookGrid;
