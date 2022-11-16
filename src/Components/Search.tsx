import { useState, useRef } from "react";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { BookData, Character } from "../Interfaces/bookdataInterface";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

// Search Component prop typing
type Props = {
  booksData: BookData[];
  setBooksData: Dispatcher<BookData[]>;
  setFiltredBooksData: Dispatcher<BookData[]>;
  characters: Character[];
  setSearchParams: Dispatcher<string>;
};

// Search inputfield styling
const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 5px",
  borderRadius: 8,
  width: "30%",
  display: "flex",
  alignItems: "center",
  gap: "2px",
}));

// // SEARCH COMPONENT
const Search = ({
  booksData,
  setFiltredBooksData,
  characters,
  setSearchParams,
}: Props) => {
  const [placeholder, setPlaceHolder] = useState<string>("");
  const inputRef = useRef<string>("");

  // This function is called  onKeyUp
  const searchBooks = (inputs: string): void => {
    if (placeholder === "" || null) {
      return;
    }
    setSearchParams(inputRef.current);

    const filter = inputs.toLowerCase();
    let filteredBooks: BookData[] = [];
    if (
      placeholder === "Name" ||
      placeholder === "Publisher" ||
      placeholder === "Author" ||
      placeholder === "ISBN"
    ) {
      booksData.filter((book): void => {
        if (
          placeholder === "Name" &&
          book.name.toLowerCase().includes(filter)
        ) {
          filteredBooks.push(book);
        }
        if (
          placeholder === "Publisher" &&
          book.publisher.toLowerCase().includes(filter)
        ) {
          filteredBooks.push(book);
        }
        if (placeholder === "Author") {
          book.authors.map((author): void => {
            if (author.toLowerCase().includes(filter)) {
              filteredBooks.push(book);
            }
          });
        }
        if (
          placeholder === "ISBN" &&
          book.isbn.toLowerCase().includes(filter)
        ) {
          filteredBooks.push(book);
        }
      });
    }

    if (placeholder === "Character") {
      characters.filter((character): void => {
        const { name, aliases, characterBooks } = character;
        if (name.toLowerCase().includes(filter)) {
          booksData.forEach((bookData): void => {
            characterBooks.forEach((book, index): void => {
              if (bookData.url === characterBooks[index]) {
                filteredBooks.push(bookData);
              }
            });
          });
        }
      });
    }
    setFiltredBooksData(filteredBooks);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={4}
      >
        <Searchbox>
          <InputBase
            ref={inputRef}
            sx={{ letterSpacing: "0.2em", height: "3rem" }}
            id="searchbox"
            placeholder={`search by ${placeholder}`}
            inputProps={{
              onKeyUp: (e) => {
                inputRef.current = (e.target as HTMLInputElement).value;
                searchBooks(inputRef.current);
              },
            }}
          />
        </Searchbox>

        <FormControl
          sx={{
            m: 2,
            minWidth: 120,
            backgroundColor: "primary.main",
            borderRadius: "10px",
            borderWidth: "0px",
          }}
        >
          <Select
            value={placeholder}
            onChange={(e) => {
              setPlaceHolder(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ borderWidth: "0px", borderRadius: "10px", color: "white" }}
          >
            <MenuItem value="">Search By</MenuItem>
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"Publisher"}>Publisher</MenuItem>
            <MenuItem value={"Author"}>Author</MenuItem>
            <MenuItem value={"Isbn"}>ISBN</MenuItem>
            <MenuItem value={"Character"}>Character Name</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Search;
