import React from 'react';
import MainPage from "./MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { BrowswerRouter as Router,
//         Routes,
//         Route } from "react-router-dom";
// import { Container, Box } from "@mui/material";

const theme = createTheme({
  palette: {
    default: {
      main: "#969696",
    },
    primary: {
      main: "#EE9209",
    },
    secondary: {
      main: "#0D0AB8",
    },
    inherit: {
      main: "#969696",
    },
  },

  overrides: {
    MuiFormControl: {
      root: {
        height: '0px',
      },
    },
    MuiInputBase: {
      root: {
        height: '0px',
      },
    },
  },
  
  // palette: {
  //   primary: {
  //     main: "#0D0AB8",
  //   },
  //   secondary: {
  //     main: "#414744",
  //   },
  // },
  typography: {
    fontFamily: "Inter",
  },
  shape: {
    borderRadius: 0,
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
         <MainPage/>
      </ThemeProvider>
    </div>
  );
}
export default App;

