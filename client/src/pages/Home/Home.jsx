import React from "react";
import "./Home.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <section id="home-page">
        {/* Hero Section */}
        <div id="hero-area">
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-left">
                  <h1>
                    Grocery Delivered at your <span>Doorstep</span>
                  </h1>
                  <Link to="/shop">Shop Now</Link>
                </div>
              </Col>
              <Col md="6">
                <div className="hero-right">
                  <img
                    src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-355/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Category Section */}
        <div id="categories-sec">
          <Container>
            <Row>
              <Col>
                <div id="category-wrapper">
                  <h2 className="title">Top Categories</h2>
                  <div className="category-item-wrapper">
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                    <div className="cate-item">
                      <img
                        src="https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1"
                        alt=""
                      />
                      <h4>Fresh Fruits</h4>
                      <p>12 items</p>
                      <div className="cate-link">
                        <Link to="/cart">
                          <HiArrowLeft className="hiArrowLeft" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Product Section */}
        <div id="product-section">
          <Container>
            <Row>
              <Col>
                <h2 className="title">Populer Products</h2>
                <div className="product-wraper">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Home;
