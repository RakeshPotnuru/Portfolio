import React from 'react';
import { Button } from 'react-bootstrap';

import './CustomButton.scss';

const CustomButton = (props) => {
  return (
    <Button
      type={props.type}
      variant={props.variant}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
