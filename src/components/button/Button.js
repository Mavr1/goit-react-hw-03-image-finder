import React from 'react';

const Button = ({ type }) => (
  <button type={type} className="SearchForm-button">
    <span className="SearchForm-button-label">Search</span>
  </button>
);

export default Button;
