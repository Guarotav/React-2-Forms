import React, { useState } from "react";
import "./style.css";
import BookCard from "./BookCard";
import BookList from "./BookList"
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
    isRead: false,
    isFavorite: false,
  });

  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);
  const [authorErrors, setAuthorErrors] = useState([]);

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
    if (name === "author" && value.length < 2) {
      setAuthorErrors(["Author must have at least 2 characters"]);
    } else {
      setAuthorErrors([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: books.length + 1,
      ...formData,
      rating: Number(formData.rating),
      isRead: Boolean(formData.isRead),
      isFavorite: Boolean(formData.isFavorite),
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
    <div className="new-book-form">
      <form onSubmit={handleSubmit}>
        <div>
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
          <label id="isRead" htmlFor="isRead">
            Read
          </label>
          <input
            name="isRead"
            type="checkbox"
            checked={formData.isRead}
            onChange={(e) =>
              setFormData({ ...formData, isRead: e.target.checked })
            }
          />
          <label id="isFavorite" htmlFor="isFavorite">
            Favorite
          </label>
          <input
            name="isFavorite"
            type="checkbox"
            checked={formData.isFavorite}
            onChange={(e) =>
              setFormData({ ...formData, isFavorite: e.target.checked })
            }
          />
          <button disabled={titleErrors.length > 0 || !dirty}>Add Book</button>
        </div>

        {titleErrors.map((error) => (
          <p className="error" key={error}>
            {error}
          </p>
        ))}
        {authorErrors.map((error) => (
          <p className="error" key={error}>
            {error}
          </p>
        ))}
      </form>
    </div>
  );
};

export default AddBook;
