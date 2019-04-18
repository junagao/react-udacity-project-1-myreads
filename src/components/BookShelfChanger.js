import React from 'react';
import { PropTypes } from 'prop-types';

const BookShelfChanger = (props) => {
  const { id, shelf, onChangeShelf } = props;

  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={e => onChangeShelf(id, e.target.value)}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  id: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
