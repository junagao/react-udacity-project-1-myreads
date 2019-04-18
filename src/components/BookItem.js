import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    id, imageUrl, title, authors, shelf,
  } = props;

  return (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }} />
          <div className="book-shelf-changer">
            <select value={shelf} readOnly>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
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
};

BookItem.defaultProps = {
  shelf: 'none',
  authors: [],
};
