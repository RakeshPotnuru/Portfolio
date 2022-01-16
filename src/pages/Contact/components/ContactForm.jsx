import React, { useState } from 'react';
import {
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
  Spinner,
  Modal
} from 'react-bootstrap';

import { CustomButton } from '../../../common/components/UIElements';
import useHttpHook from '../../../common/hooks/http-hook';
import './ContactForm.scss';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { sendRequest, isLoading, error, show } = useHttpHook();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const formErrors = formValidation();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const sendForm = async () => {
        try {
          const { success } = await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/contact`,
            'post',
            {
              name: formState.name,
              email: formState.email,
              message: formState.message
            }
          );

          if (success) {
            setShowModal(true);
          }
        } catch (err) {}
      };
      sendForm();

      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const inputChangedHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));

    if (!!errors[name]) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: null
      }));
    }
  };

  const formValidation = () => {
    const { name, email, message } = formState;
    const formErrors = {};

    if (!name || name.trim() === '') {
      formErrors.name = 'Please enter your name';
    } else if (name.length > 50) {
      formErrors.name = "I don't think there exist a name that long";
    }

    if (!email || email.trim() === '') {
      formErrors.email = 'Please enter your email';
    } else if (
      !email.match(
        //eslint-disable-next-line
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      formErrors.email = 'Please enter a valid email';
    }

    if (!message || message.trim() === '') {
      formErrors.message = 'Please enter your message';
    } else if (message.length < 10) {
      formErrors.message = 'Message must be at least 10 characters long';
    }

    return formErrors;
  };

  return (
    <>
      <Modal show={show} error={error} />
      <div id="contact-form">
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Message sent successfully!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Thank you for contacting me! I will get back to you as soon as
              possible.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton onClick={() => setShowModal(false)}>
              Close
            </CustomButton>
          </Modal.Footer>
        </Modal>
        <Container>
          <div className="contact-form">
            <Row>
              <Col sm>
                <h1>I'd love to hear from you</h1>
                <p>My DMs are always open</p>
              </Col>
              <Col sm className="mt-2">
                <Form noValidate onSubmit={formSubmitHandler}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formState.name}
                      onChange={inputChangedHandler}
                      required
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formState.email}
                      onChange={inputChangedHandler}
                      required
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Message"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      name="message"
                      value={formState.message}
                      onChange={inputChangedHandler}
                      required
                      isInvalid={!!errors.message}
                      style={{ height: '200px' }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <CustomButton type="submit">
                    {isLoading ? (
                      <>
                        Loading{' '}
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </CustomButton>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
