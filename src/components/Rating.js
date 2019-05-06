import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({
  bookId, maxRating, bookRatings, onChangeRating,
}) => {
  const renderRating = () => {
    const starsToRender = [];

    for (let i = 0; i < maxRating; i += 1) {
      if (i < bookRatings[bookId]) {
        starsToRender.push(<FontAwesomeIcon key={i} icon="heart" style={{ color: 'red', cursor: 'pointer' }} onClick={() => onChangeRating(bookId, i + 1)} />, ' ');
      } else {
        starsToRender.push(<FontAwesomeIcon key={i} icon="heart" style={{ color: 'lightgrey', cursor: 'pointer' }} onClick={() => onChangeRating(bookId, i + 1)} />, ' ');
      }
    }
    return starsToRender;
  };

  return (
    <div>
      {renderRating()}
    </div>
  );
};

Rating.propTypes = {
  bookId: PropTypes.string.isRequired,
  maxRating: PropTypes.number.isRequired,
  bookRatings: PropTypes.instanceOf(Object).isRequired,
  onChangeRating: PropTypes.func.isRequired,
};

export default Rating;
