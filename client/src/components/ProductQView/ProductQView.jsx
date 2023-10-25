import React from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "./ProductQView.scss";
import { BiCartAlt, BiSolidStar } from "react-icons/bi";

const ProductQView = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="xl">
        <Modal.Body>
          <Modal.Header closeButton className="modal-header"></Modal.Header>
          <Container>
            <Row>
              <div className="single_product-wraper">
                <Col md="5">
                  <div className="single_product_left">
                    <div className="product-photo">
                      <img
                        src="https://grostore-html.themetags.com/assets/img/products/p-lg-1.png"
                        alt=""
                      />
                    </div>
                    <div className="product_gal">
                      <ul>
                        <li>
                          <img
                            src="https://grostore-html.themetags.com/assets/img/products/apple.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://grostore-html.themetags.com/assets/img/products/apple.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://grostore-html.themetags.com/assets/img/products/apple.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://grostore-html.themetags.com/assets/img/products/apple.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            src="https://grostore-html.themetags.com/assets/img/products/apple.png"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md="7">
                  <div className="single_product_right">
                    <div className="product-details">
                      <h2>Shagor Kola (Banana Sagor)</h2>
                      <div className="product-rating">
                        <ul>
                          <li>
                            <BiSolidStar />
                          </li>
                          <li>
                            <BiSolidStar />
                          </li>
                          <li>
                            <BiSolidStar />
                          </li>
                          <li>
                            <BiSolidStar />
                          </li>
                          <li>
                            <BiSolidStar />
                          </li>
                        </ul>
                      </div>
                      <div className="product-price">
                        <p>$54.99$</p>
                        <p>$56.80$</p>
                      </div>
                      
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus numquam doloribus eligendi exercitationem
                        corporis fugit impedit ipsum, labore animi consectetur,
                        repellendus, voluptatem expedita nobis.
                      </p>
                      <div className="cart-div">
                        <button>
                          <BiCartAlt className="cart-icon" /> Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductQView;
