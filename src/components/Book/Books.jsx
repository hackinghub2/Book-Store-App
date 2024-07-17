import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// };
// const Books = () => {
//   const [books, setBooks] = useState();
//   useEffect(() => {
//     fetchHandler().then((data) => setBooks(data.books));
//   }, []);

// const Books = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(URL);
//         setBooks(response.data.books);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };
//     fetchBooks();
//   }, []);

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
