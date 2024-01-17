import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { CssBaseline,  ThemeProvider, } from "@mui/material";
import theme from "./config/theme";
import React from "react";
import Navbar from "./components/Navbar";

import { Outlet, } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Outlet/>
       
      
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

const styles = {
  siteContainer: {
    mx: { xs: 10, md: 27 },
  },
};
