import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BookFormModal from './BookFormModal';
import EditBookModal from './EditBookModal';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const BestBooks = () => {
  const [books, setBooks] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    /* TODO: Make a GET request to your API to fetch all the books from the database */
    
    // get request for books
    var getBooks = async () => {
      try {
        const API = `https://can-of-books-api-dyus.onrender.com/books`;
        const token = await getAccessTokenSilently(); // Retrieve the access token
        const res = await axios.get(API, { headers: { Authorization: `Bearer ${token}` } }); // Pass the JWT in the Authorization header
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    // run get request
    getBooks();
  }, [getAccessTokenSilently]);


  // delete a book
  const deleteBook = async (bookId) => {
    try {
      const API = `https://can-of-books-api-dyus.onrender.com/books/${bookId}`;
      const token = await getAccessTokenSilently(); // Retrieve the access token
      await axios.delete(API, { headers: { Authorization: `Bearer ${token}` } }); // Pass the JWT in the Authorization header
      console.log('Book deleted:', bookId);
      window.location.reload(false);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  /* TODO: Render all the books in a Carousel */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
      <br />
      {books.length > 0 ? (
        // display books in a carousel
        <Carousel>
          {books.map((book) => (
            <Carousel.Item key={book._id}>


                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
                <div className="d-flex justify-content-center">
                <Button variant="danger" onClick={() => deleteBook(book._id)}>Delete</Button>
                {/* edit the book's title, description, and status */}
                <EditBookModal book={book} updateBook={updateBook} />
              </div>
              <br />
              <br />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h3>The book collection is empty</h3>
      )}
      <BookFormModal books={books} setBooks={setBooks} />
    </>
  );
};

export default BestBooks;
