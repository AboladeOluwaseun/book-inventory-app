import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "primary.main",
          height: "5rem",
          margin: "auto",
        }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          Book Inventory App
        </Typography>
      </Box>
    </>
  );
};

export default Header;
