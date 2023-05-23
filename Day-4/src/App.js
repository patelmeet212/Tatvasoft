
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import { HomePage } from "./HomePage";
import { Apple } from "./Apple";
import Applet from "./Applet";
import { theme } from "./style";
import appStyle from "./appStyle.module.css";

const NavigationBar = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="center" className={appStyle.navbarContainer}>
      <Grid item>
        <img src="/logo192.png" alt="App logo" style={{ width: "50px", height: "50px" }} />
      </Grid>
      <Grid item className={appStyle.navButtons}>
        <Link to="/" className={appStyle.navLink}>
          <Button variant="contained" className={appStyle.navButton}>Home</Button>
        </Link>
        <Link to="/apple" className={appStyle.navLink}>
          <Button variant="contained" className={appStyle.navButton}>Apple</Button>
        </Link>
        <Link to="/applet" className={appStyle.navLink}>
          <Button variant="contained" className={appStyle.navButton}>Applet</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className={appStyle.pageContainer}>
        <NavigationBar />
        <div className={appStyle.contentContainer}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="*" element={<Applet />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;


