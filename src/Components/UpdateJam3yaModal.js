import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import jam3yaStore from "../Stores/Jam3yaStore";
import DatePicker from "react-datepicker";

function UpdateJam3yaModal(props) {
  const [jam3ya, setJam3ya] = useState({
    title: props.jam3ya.title,
    image: props.jam3ya.image,
    amount: props.jam3ya.amount,
    limit: props.jam3ya.limit,
    startDate: new Date(props.jam3ya.startDate),
    endDate: new Date(props.jam3ya.endDate),
  });

  const handleChange = (event) => {
    setJam3ya({ ...jam3ya, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    jam3yaStore.updateJam3ya(props.jam3ya._id, jam3ya);
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
        <Modal.Title id="contained-modal-title-vcenter">
          Update Jam3ya
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Jam3ya Title</Form.Label>
            <Form.Control
              value={jam3ya.title}
              type="text"
              onChange={handleChange}
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="image"
              value={jam3ya.image}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="amount"
              value={jam3ya.amount}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Member Limit</Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="limit"
              value={jam3ya.limit}
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
        <p>only Jam3ya Author can update Jam3ya's Info</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={handleSubmit}>
          Update Jam3ya
        </Button>
        <Button variant="info" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateJam3yaModal;
