import React from "react";
import "./Header.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Annda_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section id="header-sec">
        <Container>
          <Row>
            <Col md={12}>
              <div className="header">
                <div className="menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wish List</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  </ul>
                </div>
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div className="menu2">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Shop</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wish List</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Header;
