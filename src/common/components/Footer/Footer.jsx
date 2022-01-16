import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

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
            <p>
              Visits:{' '}
              <span className="visits">
                {isLoading ? <Spinner animation="grow" size="sm" /> : visits}
                {error && <span>{error}</span>}
              </span>
            </p>
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
            <Row>
              <Col>
                <a
                  href="https://forms.gle/2mtF1kybEQQQVrRdA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CustomButton variant={'warning'} className="report">
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
                  <CustomButton variant={'primary'} className="feedback">
                    <RiFeedbackFill className="feedback__icon mt-1" />
                    Feedback
                  </CustomButton>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <p className="end-text mt-2">Made with 💖 by Me!</p>
      </footer>
    </div>
  );
};

export default Footer;
