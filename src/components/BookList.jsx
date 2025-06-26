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
      isRead: true,
      isFavorite: false,
    },
    {
      id: 2,
      title: `1984`,
      author: `George Orwell`,
      genre: `fiction`,
      rating: 4,
      isRead: true,
      isFavorite: false,
    },
    {
      id: 3,
      title: `The Great Gatsby`,
      author: `F. Scott Fitzgerald`,
      genre: `non-fiction`,
      rating: 4,
      isRead: false,
      isFavorite: true,
    },
    {
      id: 4,
      title: `The Hobbit`,
      author: `J.R.R. Tolkien`,
      genre: `fantasy`,
      rating: 5,
      isRead: true,
      isFavorite: true,
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
          isRead={book.isRead}
          isFavorite={book.isFavorite}
        />
      ))}
    </div>
  );
};

export default BookList;
