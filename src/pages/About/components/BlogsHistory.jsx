import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import { AnimatedCounter } from '../../../common/components/UIElements';
import './BlogsHistory.scss';

const BlogsHistory = () => {
  const data = [
    {
      end: 20,
      field: 'Blogs'
    },
    {
      end: 43000,
      field: 'Views'
    },
    {
      end: 800,
      field: 'Impressions'
    }
  ];

  return (
    <Container>
      <div className="blogs-history">
        <h2 className="blogs-history__title">Blogs History</h2>
        <div className="blogs-history__card">
          <Row>
            {data.map((item, i) => {
              return (
                <Col key={i} sm>
                  <h2>
                    <AnimatedCounter end={item.end} duration={1} />
                    <span style={{ color: '#8ED2A9' }}>+</span>
                  </h2>
                  <p>{item.field}</p>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default BlogsHistory;
