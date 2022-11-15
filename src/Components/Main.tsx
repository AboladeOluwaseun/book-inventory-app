import { useState, useEffect } from "react";
import BookList from "./Books/BookList";
import Header from "./Header";
import Search from "./Search";
import { FetchedBook, BooksData } from "../Interfaces/bookdataInterface";

type Props = {};

const Main = (props: Props) => {
  const [booksData, setBooksData] = useState<BooksData[]>([]);
  const [filteredBooksData, setfilteredBooksData] = useState<BooksData[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const BOOK_API = "https://www.anapioficeandfire.com/api/books";

  const getBooks = (API: string): void => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        let books: BooksData[] = [];
        data.map((book: FetchedBook) => {
          books.push({
            name: book.name,
            publisher: book.publisher,
            isbn: book.isbn,
            authors: book.authors,
          });
        });
        setLoading(false);
        setBooksData(books);
        setfilteredBooksData(books);
      });
  };

  useEffect(() => {
    getBooks(BOOK_API);
  }, []);

  return (
    <div>
      <Header />
      <Search
        booksData={booksData}
        setFiltredBooksData={setfilteredBooksData}
        setBooksData={setBooksData}
      />
      <BookList filteredBooksData={filteredBooksData} loading={loading} />
    </div>
  );
};

export default Main;
