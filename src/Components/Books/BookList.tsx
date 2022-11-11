import { Box, Container } from "@mui/system";
import BookCard from "./BookCard";
type Props = {};

const BookList = (props: Props) => {
  return (
    <>
      <Container sx={{ marginTop: "2rem" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ flexWrap: "wrap" }}
        >
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Box>
      </Container>
    </>
  );
};

export default BookList;
