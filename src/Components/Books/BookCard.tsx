import { Box, Typography } from "@mui/material";
import Grid from "@mui/material";
import pic from "../../pic.png";

type Props = {};

const BookCard = (props: Props) => {
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
        <img className="w-[100%] h-[200px] " src={pic} alt="pic" />
        <Box padding={1}>
          <Typography sx={{ color: "white" }} variant="h6">
            Game of thrones
          </Typography>
          <div className="font-bolder">
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              Publisher: sjksbl
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              Authors: sjksbl
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              ISBN: sjksbl{" "}
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "white" }}>
              End Date: sjksbl
            </Typography>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default BookCard;
