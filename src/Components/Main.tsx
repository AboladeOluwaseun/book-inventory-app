import { useState, useEffect } from "react";
import BookList from "./Books/BookList";
import Header from "./Header";
import Search from "./Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  FetchedBook,
  BookData,
  Character,
  FetchedCharacter,
} from "../Interfaces/bookdataInterface";

type Props = {};

const Main = (props: Props) => {
  const [booksData, setBooksData] = useState<BookData[]>([]);
  const [filteredBooksData, setfilteredBooksData] = useState<BookData[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchParams, setSearchParams] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const BOOK_API = "https://www.anapioficeandfire.com/api/books?pageSize=12";
  const CHARACTERS_API =
    "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50";

  // Function for fetching books
  const getBooks = (API: string): void => {
    fetch(API)
      .then((res) => res.json())
      .then((fetchedBooks) => {
        let books: BookData[] = [];
        fetchedBooks.map((book: FetchedBook): void => {
          books.push({
            name: book.name,
            publisher: book.publisher,
            isbn: book.isbn,
            authors: book.authors,
            url: book.url,
          });
        });
        console.log(fetchedBooks);
        setLoading(false);
        setBooksData(books);
        setfilteredBooksData(books);
      });
  };

  // Function for fetching characters
  const getCharacters = (API: string): void => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        let characters: Character[] = [];
        data.map((character: FetchedCharacter): void => {
          characters.push({
            aliases: character.aliases,
            characterBooks: character.books,
            name: character.name,
            culture: character.culture,
          });
        });
        console.log(data);
        setCharacters(characters);
      });
  };

  // on first load, useEffect calls both getBooks and getCharacters Function
  useEffect(() => {
    getBooks(BOOK_API);
    getCharacters(CHARACTERS_API);
  }, []);

  return (
    <div>
      <Header />
      <Search
        booksData={booksData}
        setFiltredBooksData={setfilteredBooksData}
        setBooksData={setBooksData}
        characters={characters}
        setSearchParams={setSearchParams}
      />

      {searchParams && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography sx={{ marginTop: "10px", fontSize: "1.5rem" }}>
            {filteredBooksData.length > 0
              ? `Search Results for ${searchParams}:`
              : `No search result for ${searchParams}`}
          </Typography>
        </Box>
      )}

      <BookList filteredBooksData={filteredBooksData} loading={loading} />
    </div>
  );
};

export default Main;
