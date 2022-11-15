import { Box, Typography } from "@mui/material";
import pic from "../../pic2.jpg";

type Props = {
  name: string;
  publisher: string;
  authors: string[];
  isbn: string;
};

const BookCard = ({ name, publisher, authors, isbn }: Props) => {
  const bookDetails: { key: string; value: string | string[] }[] = [
    { key: "Name", value: name },
    { key: "Publisher", value: publisher },
    { key: "Authors", value: authors },
    { key: "ISBN", value: isbn },
  ];

  const bookDetail = bookDetails.map((bookDetail, index) => {
    return (
      <Typography key={index} sx={{ fontSize: "0.8rem", color: "white" }}>
        <Box component="span" sx={{ fontWeight: "700" }}>
          {bookDetail.key}
        </Box>
        : {bookDetail.value}
      </Typography>
    );
  });

  const colors = ["#ffb74d", "#f50057", "#4caf50", "#8a8a8a", "#F73378"];
  return (
    <>
      <Box
        boxShadow={2}
        sx={{
          backgroundColor: "#020f14",
          borderRadius: "0.4rem",
          overflow: "hidden",
          margin: "0.5rem",
          width: "240px",
        }}
      >
        {/* <img className="w-[100%] h-[200px] object-cover " src={pic} alt="pic" /> */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="200px"
          fontSize="1.5rem"
          fontWeight="700"
          color="white"
          sx={{ backgroundColor: colors[Math.floor(Math.random() * 4)] }}
        >
          {name}
        </Box>
        <Box padding={1}>{bookDetail}</Box>
      </Box>
    </>
  );
};

export default BookCard;
