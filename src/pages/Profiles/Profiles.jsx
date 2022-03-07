import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './Profiles.scss';

const ProfileCard = (props) => {
  return (
    <Link to={`/profiles/${props.name}`}>
      <div className="profiles__container__card">
        <h7>{props.name}</h7>
      </div>
    </Link>
  );
};

const Profiles = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Profiles | itsrakesh</title>
        <meta name="description" content="Find me on internet." />
        <meta property="og:title" content="Rakesh's Profiles" />
        <meta property="og:description" content="Find me on internet." />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/profiles__og_PSyYregug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254785"
        />
        <meta property="twitter:title" content="Rakesh's Profiles" />
        <meta property="twitter:description" content="Find me on internet." />
        <meta
          property="twitter:image"
          content="https://ik.imagekit.io/itsrakesh/Portfolio/profiles__og_PSyYregug.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254785"
        />
      </Helmet>
      <div id="profiles">
        <Container>
          <div className="profiles">
            <h1>My Profiles</h1>
            <h6>You can find me on the internet with url:</h6>
            <p>https://itsrakesh.co/profiles/&lt;websitename&gt;</p>
            <p>
              For example:{' '}
              <Link to="/profiles/stackoverflow">
                https://itsrakesh.co/profiles/stackoverflow
              </Link>
            </p>
            <div className="profiles__container">
              <ProfileCard name="Twitter" />
              <ProfileCard name="Showwcase" />
              <ProfileCard name="LinkedIn" />
              <ProfileCard name="Github" />
              <ProfileCard name="Medium" />
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Profiles;
