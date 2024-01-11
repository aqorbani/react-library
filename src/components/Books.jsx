import { useState } from "react";
import { books as booksData } from "../constants/Data";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import styles from "./Books.module.css";
import Search from "./Search";

const Books = () => {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const handleSearch = () => {
    if (search) {
      const newBooks = booksData.filter((book) =>
        book.title.toLocaleLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(booksData);
    }
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          <h1>Books List</h1>
          {books.map((item) => (
            <BookCard
              key={item.id}
              data={item}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h3>Favorites</h3>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
