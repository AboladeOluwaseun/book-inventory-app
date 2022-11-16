import Main from "./Components/Main";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Project Theme
export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
      contrastText: "#8a8a8a",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
