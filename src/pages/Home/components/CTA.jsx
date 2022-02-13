import React from 'react';
import {
  Col,
  Container,
  Row,
  Button
  // Collapse
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  AiOutlineMail
  // IoIosArrowDropdownCircle
} from 'react-icons/all';

// import { CustomButton } from '../../../common/components/UIElements';
// import { Upwork, PeoplePerHour, Freelancer } from '../../../assets/images';
import './CTA.scss';

const CTA = () => {
  // const [open, setOpen] = useState(false);

  return (
    <Container>
      <div id="cta">
        <div className="cta__content">
          <Row>
            <Col sm>
              <h1 className="cta__content__title">
                Interested
                <br /> working
                <br /> with me?
              </h1>
            </Col>
            <Col sm>
              <div className="cta__content__buttons">
                <Row>
                  <Col sm className="text-center">
                    <a href="mailto:rakesh@itsrakesh.co">
                      <Button variant="light" size="lg">
                        <AiOutlineMail />
                        &nbsp;Email&nbsp;Me
                      </Button>
                    </a>
                  </Col>
                  <Col sm className="text-center">
                    <Link to="/work">
                      <Button variant="outline-light" size="lg">
                        See&nbsp;More&nbsp;Projects
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {/* <h1 style={{ textAlign: 'center' }}>Or</h1>
        <div className="cta__freelance-links">
          <h2>Hire me on</h2>
          <Row className="mt-5">
            <Col className="text-center" sm>
              <a
                href="https://www.upwork.com/freelancers/~018968c9802dfa4d2b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton className="upwork">
                  <img src={Upwork} alt="upwork" />
                </CustomButton>
              </a>
            </Col>
            <Col className="text-center" sm>
              <a
                href="https://pph.me/itsrakesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton className="pph">
                  <img src={PeoplePerHour} alt="peopleperhour" />
                </CustomButton>
              </a>
            </Col>
            <Col className="text-center" sm>
              <a
                href="https://www.freelancer.com/u/RakeshPotnuru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton className="freelancer">
                  <img src={Freelancer} alt="freelancer" />
                </CustomButton>
              </a>
            </Col>
          </Row>
        </div>
        <div className="cta__roles my-5">
          <div
            onClick={() => setOpen(!open)}
            aria-controls="collapse-text"
            aria-expanded={open}
          >
            <IoIosArrowDropdownCircle /> I am open to
          </div>
          <hr />
          <Collapse in={open}>
            <div id="collapse-text">
              <ul>
                <li>Internship</li>
                <li>Part-time</li>
                <li>Contract</li>
                <li>Freelance</li>
                <li>Remote</li>
                <li>
                  Full-time? - Let's <Link to="/contact">talk</Link>
                </li>
                <li>Other cool opportunities</li>
              </ul>
            </div>
          </Collapse>
        </div> */}
      </div>
    </Container>
  );
};

export default CTA;
