import React from "react";
import "./Admin.scss";
// import PageHeader from "../../components/PageHeader/PageHeader";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { BiSolidDashboard, BiLogoProductHunt } from "react-icons/bi";
import { AiFillTags } from "react-icons/ai";
import { TbBrandPlanetscale } from "react-icons/tb";

const Admin = () => {
  return (
    <>
      {/* <PageHeader htitle="Admin" /> */}
      <div id="admin-page">
        <Row>
          <Col md="2">
            <div className="sidebar-wrapper">
              <ul>
                <li>
                  <Link to="dashboard">
                    <span>
                      <BiSolidDashboard />
                    </span>
                    Dashboard
                  </Link>
                </li>
                <li className="active">
                  <Link to="brand">
                    <span>
                      <TbBrandPlanetscale />
                    </span>
                    Brand
                  </Link>
                </li>
                <li>
                  <Link to="tag">
                    <span>
                      <AiFillTags />
                    </span>
                    Tag
                  </Link>
                </li>
                <li>
                  <Link to="product">
                    <span>
                      <BiLogoProductHunt />
                    </span>
                    Product
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="10">
            <div className="content">
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Admin;
