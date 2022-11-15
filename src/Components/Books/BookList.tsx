import { Box, Container } from "@mui/system";
import { CircularProgress } from "@mui/material";
import BookCard from "./BookCard";
import { useState, useEffect } from "react";
import { BooksData } from "../../Interfaces/bookdataInterface";

type Props = {
  filteredBooksData: BooksData[];
  loading: boolean;
};

const BookList = ({ filteredBooksData, loading }: Props) => {
  const bookListDisplay = filteredBooksData.map(
    (book: BooksData, index: number) => {
      return (
        <BookCard
          key={index}
          name={book.name}
          publisher={book.publisher}
          authors={book.authors}
          isbn={book.isbn}
        />
      );
    }
  );

  return (
    <>
      <Container sx={{ marginTop: "3rem" }}>
        {loading && (
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{ flexWrap: "wrap" }}
        >
          {bookListDisplay}
        </Box>
      </Container>
    </>
  );
};

export default BookList;
