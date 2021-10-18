import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import jam3yaStore from "../Stores/Jam3yaStore";
import DatePicker from "react-datepicker";

export default function AddJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });
  const handleChange = (event) => {
    setJam3ya({ ...jam3ya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    jam3yaStore.createJam3ya(jam3ya);
    props.closeModal();
  };
  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Jam3ya</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Jam3ya Title</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="title"
              placeholder="Enter course title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="image"
              placeholder="Enter image url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="amount"
              placeholder="Enter amount"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Member Limit</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="limit"
              placeholder="Enter member limit"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <DatePicker
              selected={jam3ya.startDate}
              onChange={(date) => setJam3ya({ ...jam3ya, startDate: date })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <DatePicker
              selected={jam3ya.endDate}
              onChange={(date) => setJam3ya({ ...jam3ya, endDate: date })}
            />
          </Form.Group>
        </Form>
        <p>only registered users can create Jam3ya</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={handleSubmit}>
          Create Jam3ya
        </Button>
        <Button variant="info" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
