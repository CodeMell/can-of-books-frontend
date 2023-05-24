import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    /* TODO: Make a GET request to your API to fetch all the books from the database */
    // run get request
    getBooks();
  }, []);

// get request for books
  var getBooks = async() =>{
    try {
      const API = `https://can-of-books-backend-k4eg.onrender.com/books`;
      const res = await axios.get(API);
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  /* TODO: Render all the books in a Carousel */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length > 0 ? (
        // display books in a carousel
        <Carousel>
          {books.map((book) => (
            <Carousel.Item key={book.id}>
              {/* <img
                className="d-block w-100"
                src={book.image}
                alt={book.title}
              /> */}
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h3>The book collection is empty</h3>
      )}
    </>
  );
};

export default BestBooks;

