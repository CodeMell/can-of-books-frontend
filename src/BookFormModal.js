import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const BookFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookData, setBookData] = useState({
    title: '',
    description: '',
    status: ''
  });

//   var getBooks = async() =>{
//     try {
//       const API = `https://can-of-books-api-dyus.onrender.com/books`;
//       const res = await axios.get(API);
//       console.log(res.data);
//       setBooks(res.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send bookData to API
    console.log('New book:', bookData);

    // Reset the form and close the modal
    setBookData({
      title: '',
      description: '',
      status: ''
    });
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleModalOpen}>
        Add Book
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={bookData.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={bookData.status}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={bookData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookFormModal;
