import React from 'react';
import { BackToTop } from '../../common/components/UIElements';
import { ContactForm } from './components';

const Contact = () => {
  return (
    <React.Fragment>
      <ContactForm />
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
