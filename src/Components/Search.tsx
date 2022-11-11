import React from "react";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
type Props = {};

const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "#ebebeb",
  padding: "0 5px",
  borderRadius: 8,
  width: "30%",
  display: "flex",
  alignItems: "center",
  gap: "2px",
}));

const Search = (props: Props) => {
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
            fullWidth
            sx={{ letterSpacing: "0.2em" }}
            id="searchbox"
            placeholder="search..."
          />
        </Searchbox>
        <Button
          variant="contained"
          sx={{ marginLeft: "0.8rem" }}
          color="primary"
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default Search;
