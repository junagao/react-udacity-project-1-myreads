import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ratings = ({
  bookId, maxRating, currentRating, onChangeRating,
}) => {
  const renderRating = () => {
    const starsToRender = [];

    for (let i = 0; i < maxRating; i += 1) {
      if (i < currentRating) {
        starsToRender.push(<FontAwesomeIcon key={i} icon="heart" style={{ color: 'red', cursor: 'pointer' }} onClick={() => onChangeRating(bookId, i + 1)} />, ' ');
      } else {
        starsToRender.push(<FontAwesomeIcon key={i} icon="heart" style={{ color: 'lightgrey', cursor: 'pointer' }} onClick={() => onChangeRating(bookId, i + 1)} />, ' ');
      }
    }
    return starsToRender;
  };

  return (
    <div className="rating">
      {renderRating()}
    </div>
  );
};

Ratings.propTypes = {
  bookId: PropTypes.string.isRequired,
  maxRating: PropTypes.number,
  currentRating: PropTypes.number,
  onChangeRating: PropTypes.func.isRequired,
};

Ratings.defaultProps = {
  maxRating: 3,
  currentRating: 0,
};


export default Ratings;
