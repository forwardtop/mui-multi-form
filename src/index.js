// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00294b", // Blue color for primary
    },
    secondary: {
      main: "#000000", // Black color for secondary
    },
  },
  typography: {
    fontFamily: "Arial", // Use Arial font
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
