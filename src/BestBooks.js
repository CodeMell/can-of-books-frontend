import React, { useState, useEffect } from 'react';

const BestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    /* TODO: Make a GET request to your API to fetch all the books from the database */
  }, []);

  /* TODO: Render all the books in a Carousel */

  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length ? (
        <p>Book Carousel coming soon</p>
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </>
  );
};

export default BestBooks;

