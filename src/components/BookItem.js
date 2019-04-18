import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const BookItem = (props) => {
  const {
    id, imageUrl, title, authors, shelf, onChangeShelf,
  } = props;

  return (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }} />
          <BookShelfChanger id={id} shelf={shelf} onChangeShelf={onChangeShelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors}
        </div>
      </div>
    </li>
  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.instanceOf(Array),
  shelf: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired,
};

BookItem.defaultProps = {
  shelf: 'none',
  authors: [],
};
