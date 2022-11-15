import { useState, useRef } from "react";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material";
// import Button from "@mui/material/Button";
import { FormControl, Select, MenuItem } from "@mui/material";
import { BooksData } from "../Interfaces/bookdataInterface";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
type Props = {
  booksData: BooksData[];
  setBooksData: Dispatcher<BooksData[]>;
  setFiltredBooksData: Dispatcher<BooksData[]>;
};

const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 5px",
  borderRadius: 8,
  width: "30%",
  display: "flex",
  alignItems: "center",
  gap: "2px",
}));

const Search = ({ booksData, setFiltredBooksData }: Props) => {
  const [placeholder, setPlaceHolder] = useState<string>("");
  const inputRef = useRef<string>("");

  const searchBooks = (searchParams: string): void => {
    if (placeholder === "" || null) {
      return;
    }
    console.log(searchParams);
    const filter = searchParams.toLowerCase();
    let filteredBooks: BooksData[] = [];
    booksData.filter((book) => {
      if (placeholder === "Name" && book.name.toLowerCase().includes(filter)) {
        filteredBooks.push(book);
      }
      if (
        placeholder === "Publisher" &&
        book.publisher.toLowerCase().includes(filter)
      ) {
        filteredBooks.push(book);
      }
      if (placeholder === "Author") {
        book.authors.map((author) => {
          if (author.toLowerCase().includes(filter)) {
            filteredBooks.push(book);
          }
        });
      }
      if (placeholder === "ISBN" && book.isbn.toLowerCase().includes(filter)) {
        filteredBooks.push(book);
      }
    });
    setFiltredBooksData(filteredBooks);
    console.log(filteredBooks);
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
            sx={{ letterSpacing: "0.2em", height: "2.2rem" }}
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
          sx={{ m: 1, minWidth: 120, backgroundColor: "secondary.main" }}
        >
          <Select
            value={placeholder}
            onChange={(e) => {
              setPlaceHolder(e.target.value);
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">Search By</MenuItem>
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"Publisher"}>Publisher</MenuItem>
            <MenuItem value={"Author"}>Author</MenuItem>
            <MenuItem value={"Isbn"}>ISBN</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Search;
