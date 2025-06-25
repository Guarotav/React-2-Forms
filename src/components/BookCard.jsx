import React from "react";
import "./style.css";

const BookCard = ({ title, author, genre, rating }) => {
  return (
    <div className = "bookCard">
      <h3>Title: {title}</h3>
      <h4>Author: {author}</h4>
      <h5>Genre: {genre}</h5>
      <h5>Rating: {rating}</h5>
    </div>
  );
};

export default BookCard;
