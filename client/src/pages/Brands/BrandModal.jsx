import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "./BrandModal.scss";
import { useDispatch } from "react-redux";
import { createBrand } from "../../redux/Shop/actions";

const BrandModal = ({ show, onHide }) => {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);

  const dispatch = useDispatch();

  //Upload Logo
  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };
  const handleBrandForm = async (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("brand-photo", logo);

    dispatch(createBrand(form_data));
  };
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="md">
        <Modal.Body>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>Add Brand</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleBrandForm}>
            <Form.Group>
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand Photo</Form.Label>
              <Form.Control required type="file" onChange={handleLogoUpload} />
              <div className="preview-photo">
                {logo && <img src={URL.createObjectURL(logo)} alt="" />}
              </div>
            </Form.Group>
            <Form.Group>
              <button type="submit">Add Product</button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BrandModal;
