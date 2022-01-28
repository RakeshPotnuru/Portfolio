import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner, OverlayTrigger, Tooltip } from 'react-bootstrap';

import {
  FaTwitter,
  FaMedium,
  FaLinkedin,
  FaGithub,
  MdReport,
  RiFeedbackFill
} from 'react-icons/all';
import { Link } from 'react-router-dom';
import { CustomButton } from '../UIElements';
import useHttpClient from '../../hooks/http-hook';
import './Footer.scss';

const Footer = () => {
  const [visits, setVisits] = useState(0);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `https://api.countapi.xyz/hit/itsrakesh.co/${process.env.REACT_APP_COUNTAPI_KEY}`
        );
        setVisits(responseData.value);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <div id="footer">
      <footer>
        <Row>
          <Col sm>
            <h1>Let's Connect</h1>
            <h6>
              Visits:{' '}
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Times Viewed</Tooltip>}
              >
                <span className="visits">
                  {isLoading ? <Spinner animation="grow" size="sm" /> : visits}
                  {error && <span>{error}</span>}
                </span>
              </OverlayTrigger>
            </h6>
          </Col>
          <Col sm>
            <Link to="/profiles/twitter">
              <FaTwitter className="social-icon" />
            </Link>
            <Link to="/profiles/github">
              <FaGithub className="social-icon" />
            </Link>
            <Link to="/profiles/medium">
              <FaMedium className="social-icon" />
            </Link>
            <Link to="/profiles/linkedin">
              <FaLinkedin className="social-icon" />
            </Link>
          </Col>
          <Col sm>
            <Row className="m-2">
              <Col>
                <a
                  href="https://forms.gle/2mtF1kybEQQQVrRdA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CustomButton variant="warning">
                    <MdReport /> Report
                  </CustomButton>
                </a>
              </Col>
              <Col>
                <a
                  href="https://forms.gle/PbcqrhTEWQtKxE6g7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CustomButton variant="primary">
                    <RiFeedbackFill /> Feedback
                  </CustomButton>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <h6 className="end-text mt-2">Made with 💖 by Me!</h6>
      </footer>
    </div>
  );
};

export default Footer;
