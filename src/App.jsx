import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
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

const App = () => {

  return (
    <div className="app">
      <h1 className="title">Book Review App 📝</h1>
      <label for="genre">Select Genre</label>
      <select className="genre" name = "genre" >
        {/* <option value="" disabled selected>Select your option</option> */}
      {/* <select placeholder="Title" type="text" value="" name="title"> */}
        <option>Fiction</option>
        <option>Horror</option>
        <option>Non Fiction</option>
        <option>Horror</option>
        <option>Sci Fi</option>
        <option>Sports</option>
        
      </select>
      <AddBook />
      <BookList />
      <BookCard />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
