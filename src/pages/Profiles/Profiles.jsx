import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Profiles.scss';

const ProfileCard = (props) => {
  return (
    <Link to={`/profiles/${props.name}`}>
      <div className="profiles__container__card">
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

const Profiles = () => {
  return (
    <div id="profiles">
      <Container>
        <div className="profiles">
          <h1>My Profiles</h1>
          <p>You can find me on the internet with url:</p>
          <p>https://itsrakesh.co/profiles/&lt;websitename&gt;</p>
          <p>
            For example:{' '}
            <Link to="/profiles/stackoverflow">
              https://itsrakesh.co/profiles/stackoverflow
            </Link>
          </p>
          <div className="profiles__container">
            <ProfileCard name="Twitter" />
            <ProfileCard name="LinkedIn" />
            <ProfileCard name="Github" />
            <ProfileCard name="Medium" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profiles;
