import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = (props) => {
  const { books } = props;

  return (
    <React.Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf books={books} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </React.Fragment>
  );
};

ListBooks.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default ListBooks;
