import React, { useState } from "react";
import "./style.css";
/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ books, setBooks }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: 1,
  });

  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleChange = (e) => {
    setDirty(true);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "title" && value.length < 4) {
      setTitleErrors(["Title must have at least 4 characters"]);
    } else {
      setTitleErrors([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: books.length + 1,
      ...formData,
      rating: Number(formData.rating),
    };

    setBooks([...books, newBook]);

    setFormData({
      title: "",
      author: "",
      genre: "",
      rating: 1,
    });

    setTitleErrors([]);
    setDirty(false);
  };

  return (
    <form onSubmit={handleSubmit} className="new-book-form">
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        name="author"
        type="text"
        required
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
      />
      <select name="genre" value={formData.genre} onChange={handleChange}>
        <option value="">Select Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non Fiction">Non Fiction</option>
        <option value="Horror">Horror</option>
        <option value="Sci Fi">Sci Fi</option>
        <option value="Sports">Sports</option>
      </select>
      <input
        name="rating"
        type="number"
        min="1"
        max="5"
        placeholder="Enter a rating from 1 to 5"
        value={formData.rating}
        onChange={handleChange}
      />
      {titleErrors.map((error) => (
        <p className="error" key={error}>
          {error}
        </p>
      ))}
      <button disabled={titleErrors.length > 0 || !dirty}>Add Book</button>
    </form>
  );
};

export default AddBook;
