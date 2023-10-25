import React from "react";
import "./PageHeader.scss";
import { Col, Container, Row } from "react-bootstrap";

const PageHeader = ({title,htitle}) => {
  return (
    <>
      <div id="page-header">
        <Container>
          <Row>
            <Col md="12">
              <h1>
                {title} <span>{htitle}</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageHeader;
