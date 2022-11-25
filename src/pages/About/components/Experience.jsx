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
            <span
              style={{
                backgroundColor:
                  props.endDate === 'Present' ? 'rgb(51, 255, 0)' : '#ff0000'
              }}
            />{' '}
            {props.type}
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
              company="Microsoft Learn"
              companyImgUrl="https://pbs.twimg.com/profile_images/1268202810283225095/RPVzfN-t_400x400.png"
              type="Volunteering"
              position="Microsoft Learn Student Ambassador"
              startDate="Jul 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Major League Hacking"
              companyImgUrl="https://pbs.twimg.com/profile_images/1184141979493568515/NMa0vlIb_400x400.jpg"
              type="Fellowship"
              position="Prep Fellow"
              startDate="11 Jul 2022"
              endDate="31 Jul 2022"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Postman Student Community"
              companyImgUrl="https://pbs.twimg.com/profile_images/1534945114807644173/h22f7y8F_400x400.png"
              type="Volunteering"
              position="Postman Student Leader"
              startDate="Jun 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Ramotion"
              companyImgUrl="https://pbs.twimg.com/profile_images/695681118578708480/wQ9kNRnB_400x400.png"
              type="Freelancing"
              position="Content Writer"
              startDate="May 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Scaler"
              companyImgUrl="https://pbs.twimg.com/profile_images/1491663604487102465/_jWKH2Gt_400x400.jpg"
              type="Freelancing"
              position="Technical Writer"
              startDate="May 2022"
              endDate="Oct 2022"
            />
            <div className="line"></div>
            <ExperienceItem
              company="freeCodeCamp"
              companyImgUrl="https://pbs.twimg.com/profile_images/1276770212927410176/qTgTIejk_400x400.jpg"
              type="Volunteering"
              position="Author"
              startDate="Apr 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Google Developer Student Club - LPU"
              companyImgUrl="https://pbs.twimg.com/profile_images/1425284890799460354/phO6uvw5_400x400.jpg"
              type="Volunteering"
              position="Team Member"
              startDate="Mar 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Aviyel"
              companyImgUrl="https://pbs.twimg.com/profile_images/1512091770506838018/eMqiYCHZ_400x400.jpg"
              position="Technical Writer"
              type="Volunteering"
              startDate="Mar 2022"
              endDate="Oct 2022"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
