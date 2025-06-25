import React, { useState } from "react";
import BookCard from "./BookCard";
import AddBook from "./AddBook";

const BookList = () => {
  const initialBooksState = [
    {
      id: 1,
      title: `To Kill a MockingBird`,
      author: `HarperLee`,
      genre: `fiction`,
      rating: 5,
    },
    {
      id: 2,
      title: `1984`,
      author: `George Orwell`,
      genre: `fiction`,
      rating: 4,
    },
    {
      id: 3,
      title: `The Great Gatsby`,
      author: `F. Scott Fitzgerald`,
      genre: `non-fiction`,
      rating: 4,
    },
    {
      id: 4,
      title: `The Hobbit`,
      author: `J.R.R. Tolkien`,
      genre: `fantasy`,
      rating: 5,
    },
  ];

  const [books, setBooks] = useState(initialBooksState);

  return (
    <div>
      <AddBook books={books} setBooks={setBooks} />
      
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
          rating={book.rating}
        />
      ))}
    </div>
  );
};

export default BookList;
