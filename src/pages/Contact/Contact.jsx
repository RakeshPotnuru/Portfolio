import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import { ContactForm } from './components';

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | itsrakesh</title>
        <meta
          name="description"
          content="Leave a message or schedule a google meet."
        />
        <meta property="og:title" content="Get in touch with Rakesh" />
        <meta
          property="og:description"
          content="Leave a message or schedule a google meet."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/contact_og_3g-94R3TXE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644156573585"
        />
        <meta property="twitter:title" content="Get in touch with Rakesh" />
        <meta
          property="twitter:description"
          content="Leave a message or schedule a google meet."
        />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/contact_og_3g-94R3TXE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644156573585"
        />
      </Helmet>
      <ContactForm />
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
