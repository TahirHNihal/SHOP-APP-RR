import { React } from "react";
import "./Shop.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import PageHeader from "../../components/PageHeader/PageHeader";

const Shop = () => {
  return (
    <>
      <section id="shop-page">
        {/* Hero Section */}
        <PageHeader title="Our" htitle="Shop" />
        {/* Product Section */}
        <div id="product-section">
          <Container>
            <Row>
              <Col md="3">
                <div className="sidebar-wraper">
                  <h2>Side Bar</h2>
                  <div>
                  </div>
                </div>
              </Col>
              <Col md="9">
                <div className="product-wraper">
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

export default Shop;
