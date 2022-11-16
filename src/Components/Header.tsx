import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LibraryBooks } from "@mui/icons-material";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          backgroundColor: "primary.main",
          height: "7rem",
          margin: "auto",
        }}
      >
        <LibraryBooks sx={{ width: "40px", height: "40px", color: "white" }} />
        <Typography variant="h5" sx={{ color: "white", fontSize: "2rem" }}>
          Book Inventory App
        </Typography>
      </Box>
    </>
  );
};

export default Header;
