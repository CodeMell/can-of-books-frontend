import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookFormModal from './BookFormModal';
import { Button } from 'react-bootstrap';

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
      const API = `https://can-of-books-api-dyus.onrender.com/books`;
      const res = await axios.get(API);
      console.log(res.data);
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // delete a book
  const deleteBook = async (bookId) => {
    try {
      const API = `https://can-of-books-api-dyus.onrender.com/books/${bookId}`;
      await axios.delete(API);
      console.log('Book deleted:', bookId);
      window.location.reload(false);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  
  

  /* TODO: Render all the books in a Carousel */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
    <br/>
      {books.length > 0 ? (
        // display books in a carousel
        <Carousel >
          {books.map((book) => (
            <Carousel.Item key={book._id}>

                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
                <div className="d-flex justify-content-center">
                <Button variant="danger" onClick={() => deleteBook(book._id)}>Delete</Button>
                </div>
                <br/>
                <br/>
            </Carousel.Item>
          ))}
        </Carousel>
        
      ) : (
        <h3>The book collection is empty</h3>
      )}
      <BookFormModal books={books} setBooks={setBooks}/>
    </>
  );
};

export default BestBooks;

