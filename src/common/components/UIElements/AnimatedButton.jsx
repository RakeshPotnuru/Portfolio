import React from 'react';

import './AnimatedButton.scss';

const Button = (props) => {
  return (
    <button
      className={`${
        props.outline ? 'button-outline' : 'button'
      } bubbly-button ${props.className}`}
      onClick={props.onClick}
    >
      <span className="button__text">{props.children}</span>
    </button>
  );
};

export default Button;
