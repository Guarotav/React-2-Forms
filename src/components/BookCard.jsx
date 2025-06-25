import React from "react";

const BookCard = ({title, author, genre, rating}) => {
  return <div>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <h5>{genre}</h5>
    <h5>{rating}</h5>
  </div>;
};

export default BookCard;
