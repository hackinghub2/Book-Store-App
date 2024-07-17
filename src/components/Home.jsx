import React from 'react';
import "./Home.css";


const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Book Store</h1>
        <p>Explore our vast collection of books</p>
        <a href="/books" className="browse-link">
          Browse All Books
        </a>
      </header>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-list">
          <div className="book-card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg" alt="The Great Gatsby" />
            <div className="book-details">
              <h3>The Great Gatsby</h3>
              <p>by F. Scott Fitzgerald</p>
            </div>
          </div>
          <div className="book-card">
            <img src="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg" alt="To kill a mocking bird" />
            <div className="book-details">
              <h3>To Kill a Mockingbird</h3>
              <p>by Harper Lee</p>
            </div>
          </div>
          {/* Add more book cards... */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
