import React from "react";
import "./style.css";
import AddBook from "./AddBook"

const BookCard = ({ title, author, genre, rating, isRead, isFavorite }) => {
  return (
    <div className = "bookCard">
      <h3>Title: {title}</h3>
      <h4>Author: {author}</h4>
      <h4>Genre: {genre}</h4>
      <h5>Rating: {rating}</h5>
      {isRead && <p>This book has been read ✔️</p>}
      {isFavorite && <p>⭐ Favorite Book</p>}
    </div>
  );
};

export default BookCard;
