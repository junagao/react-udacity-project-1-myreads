import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h3>Oops! Sorry the page was not found.</h3>
    <p>
      Go back
      <span>&nbsp;</span>
      <span><Link to="/">Home</Link></span>
    </p>
  </div>
);

export default PageNotFound;
