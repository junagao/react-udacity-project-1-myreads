import React from 'react';
import { PropTypes } from 'prop-types';

const ClearSearchResults = (props) => {
  const { searchResults } = props;

  return (
    <div className="clear-search-results">
      <h3>{searchResults}</h3>
    </div>
  );
};

ClearSearchResults.propTypes = {
  searchResults: PropTypes.instanceOf(Array).isRequired,
};

export default ClearSearchResults;
