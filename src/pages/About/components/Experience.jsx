import React from 'react';
import { Container, Stack } from 'react-bootstrap';

import { Company } from '../../../assets/images';
import './Experience.scss';

const ExperienceItem = (props) => {
  return (
    <div className="experience__content__item">
      <Stack direction="horizontal" gap={5}>
        <div className="experience__content__item__img">
          <img
            src={props.companyImgUrl ? props.companyImgUrl : Company}
            alt={props.company}
          />
        </div>
        <div className="experience__content__item__details mt-3">
          <h3>{props.company}</h3>
          <h5>{props.position}</h5>
          <span className="type">
            <span /> {props.type}
          </span>
          <p>
            {props.startDate} - {props.endDate}
          </p>
        </div>
      </Stack>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <div className="experience">
          <h2>Experience</h2>
          <div className="experience__content">
            <ExperienceItem
              company="Google Developer Student Club - LPU"
              companyImgUrl="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_180,q_auto:good,w_180/v1/gcs/platform-data-dsc/contentbuilder/favicon.png"
              type="Volunteering"
              position="Team Member"
              startDate="Mar 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Aviyel"
              companyImgUrl="data:image/png;base64,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"
              position="Technical Writer"
              type="Part Time"
              startDate="Mar 2022"
              endDate="Present"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
