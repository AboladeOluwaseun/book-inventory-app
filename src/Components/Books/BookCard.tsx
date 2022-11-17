import { Box, Typography } from "@mui/material";
import pic from "../../pic3.jpg";

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

  return (
    <>
      <Box
        boxShadow={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "0.4rem",
          overflow: "hidden",
          margin: "0.5rem",
          width: "300px",
        }}
      >
        <div className="w-[100%] relative h-[300px]">
          <img
            className="w-full h-full object-cover relative "
            src={pic}
            alt="pic"
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            width="100%"
            height="100%"
            fontSize="1.5rem"
            fontWeight="700"
            position="absolute"
            top={0}
            color="white"
            sx={{
              backgroundColor: "black",
              color: "transparent",
              opacity: 0.4,
              ":hover": { opacity: 0.7, color: "white" },
            }}
          >
            {name}
          </Box>
        </div>

        <Box padding={1}>
          {bookDetails.map((bookDetail, index) => {
            return (
              <Typography
                key={index}
                sx={{ fontSize: "1.0rem", color: "black" }}
              >
                <Box component="span" sx={{ fontWeight: "700" }}>
                  {bookDetail.key}
                </Box>
                : {bookDetail.value}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default BookCard;
