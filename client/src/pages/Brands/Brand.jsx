import React, { useState } from "react";
import "./Brand.scss";
import { Form, Table } from "react-bootstrap";
import { BiPlus, BiSolidEdit, BiTrash } from "react-icons/bi";
import BrandModal from "./BrandModal";
import { useSelector } from "react-redux";

const Brand = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(true);

  const { brands } = useSelector((state) => state.shop);
  // console.log(useSelector((state) => state.shop.name));
  return (
    <>
      <div id="brand-page">
        <BrandModal show={show} onHide={() => setShow(false)} />
        <div className="header">
          <div className="h-left">
            <h1>Brand</h1>
          </div>
          <div className="h-right">
            <button onClick={() => setShow(true)}>
              <BiPlus /> Add New
            </button>
          </div>
        </div>
        <div className="brand-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr className="align-middle">
                <th>#</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.length > 0 ? (
                brands.map(({ name, photo }, index) => {
                  return (
                    <tr className="align-middle" key={index}>
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>
                        <img
                          src={`http://localhost:5050/brands/${photo}`}
                          alt={name + "logo"}
                        />
                      </td>
                      <td>
                        <Form>
                          <Form.Check
                            onClick={() => {
                              setStatus(!status);
                            }}
                            type="switch"
                            id="custom-switch"
                            label={status ? "Published" : "Unpublished"}
                            checked={status}
                          />
                        </Form>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <button>
                              <BiSolidEdit />
                            </button>
                          </li>
                          <li>
                            <button>
                              <BiTrash />
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="align-middle">
                  <td colSpan="5">
                    <h2 style={{ textAlign: "center" }}>No brand added</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* <tr className="align-middle">
                <td>2</td>
                <td>Agora</td>
                <td>
                  <img
                    src="https://agorasuperstores.com/assets/images/logo.png"
                    alt=""
                  />
                </td>
                <td>
                  <Form>
                    <Form.Check
                      onClick={() => {
                        setStatus(!status);
                      }}
                      type="switch"
                      id="custom-switch"
                      label={status ? "Published" : "Unpublished"}
                      checked={status}
                    />
                  </Form>
                </td>
                <td>
                  <ul>
                    <li>
                      <button>
                        <BiSolidEdit />
                      </button>
                    </li>
                    <li>
                      <button>
                        <BiTrash />
                      </button>
                    </li>
                  </ul>
                </td>
              </tr> */}
        </div>
      </div>
    </>
  );
};

export default Brand;
