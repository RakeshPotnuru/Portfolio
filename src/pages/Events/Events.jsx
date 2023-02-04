import React from 'react';
import { Helmet } from 'react-helmet';

const Events = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>itsrakesh - Events</title>
        <meta name="description" content="Events I've conducted." />
        <meta property="og:title" content="Rakesh Potnuru" />
        <meta property="og:description" content="Events I've conducted." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/events_og_K30kmn2bj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675524574559"
        />
        <meta property="twitter:title" content="Rakesh Potnuru" />
        <meta property="twitter:description" content="Events I've conducted." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/events_og_K30kmn2bj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675524574559"
        />
      </Helmet>
      <div>
        <iframe
          title="Event subscription form"
          width="100%"
          src="https://5520117e.sibforms.com/serve/MUIEANoqCqVDlOSA5tbSwot7SSm2JaMg32iJXf4keKFXv2hQfPw1U5gAGp9n6H_DdIuc8VKxJXpPOItu0wGf05IGa8kcYrm3-ZYq61qRNMRH1dCnaaKDNAs0nX8S3PsFT0IIEZ7Jlx3XWhI8KzjGHHGZFDm3EFtC-wbdqLqvIYWxkQEF_MjC8jIitiiErIx7Vg64AanlxBiNz676"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
            height: '100vh'
          }}
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Events;
