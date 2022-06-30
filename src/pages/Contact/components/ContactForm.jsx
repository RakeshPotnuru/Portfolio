import React, { useState } from 'react';
import {
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
  Spinner,
  Modal,
  Stack
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Calendly } from '.';

import { CustomButton } from '../../../common/components/UIElements';
import useHttpHook from '../../../common/hooks/http-hook';
import './ContactForm.scss';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
  controlId,
  isInvalid,
  ...props
}) => {
  return (
    <FloatingLabel label={label} controlId={controlId} className="mb-3">
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={isInvalid}
        required={required}
        {...props}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </FloatingLabel>
  );
};

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
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title id="contained-modal-title-vcenter">
              Message sent successfully!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>
              Thank you for contacting me! I will get back to you as soon as
              possible.
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <CustomButton
              variant="secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </CustomButton>
          </Modal.Footer>
        </Modal>
        <Container>
          <div className="contact-form">
            <h1>I'd love to hear from you</h1>
            <p>
              Just a quick chat? - DM me on Twitter{' '}
              <Link to={'/profiles/twitter'}>@rakesh_at_tweet</Link>
            </p>
            <Row className="mt-5">
              <Col className="mt-2" sm>
                <Stack gap={5}>
                  <h4>Simply leave a message</h4>
                  <Form noValidate onSubmit={formSubmitHandler}>
                    <Input
                      controlId="floatingInput"
                      label="Name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={inputChangedHandler}
                      placeholder="Name"
                      error={errors.name}
                      required
                      isInvalid={!!errors.name}
                    />

                    <Input
                      controlId="floatingPassword"
                      label="Email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={inputChangedHandler}
                      placeholder="Email"
                      error={errors.email}
                      required
                      isInvalid={!!errors.email}
                    />

                    <Input
                      controlId="floatingTextarea2"
                      label="Message"
                      as="textarea"
                      name="message"
                      value={formState.message}
                      onChange={inputChangedHandler}
                      placeholder="Message"
                      error={errors.message}
                      required
                      isInvalid={!!errors.message}
                      style={{ height: '200px' }}
                    />

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
                </Stack>
              </Col>
              <Col sm>
                <h2>Or</h2>
              </Col>
              <Col className="mt-2" sm>
                <Stack gap={5}>
                  <h4>Schedule a Google Meet with me!</h4>
                  <Calendly />
                </Stack>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactForm;
