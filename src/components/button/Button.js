import React from 'react';

const Button = ({
  type = 'button',
  buttonText,
  clsnButton,
  clsnButtonName,
  handleClick,
}) => (
  <button type={type} className={clsnButton} onClick={handleClick}>
    <span className={clsnButtonName}>{buttonText}</span>
  </button>
);

export default Button;
