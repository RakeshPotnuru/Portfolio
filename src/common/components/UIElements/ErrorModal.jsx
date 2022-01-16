import React from 'react';
import { Modal } from 'react-bootstrap';

import { CustomButton } from './';

const ErrorModal = (props) => {
  const [show, setShow] = React.useState(props.show);
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.error}</p>
      </Modal.Body>
      <Modal.Footer>
        <CustomButton onClick={() => setShow(false)}>Close</CustomButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
