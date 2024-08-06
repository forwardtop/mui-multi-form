// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00294b",
    },
    secondary: {
      main: "#000000", // Black color for secondary
    },
    warning: {
      main: "rgb(244, 67, 54)",
    },
  },
  typography: {
    fontFamily: "Arial", // Use Arial font
  },
});

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
