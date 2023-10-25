import React from "react";
import "./Footer.scss";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section id="footer-sec">
        <Container>
          <Row>
            <Col>
              <div className="footer">
                <div className="footer-left"></div>
                <div className="footer-center">
                  <p>&copy;2023 Annda eCommerce Limited </p>
                </div>
                <div className="footer-right"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
