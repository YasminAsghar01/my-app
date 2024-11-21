import Navbar from "./components/navbar";
import HomePage from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider, createTheme, GlobalStyles } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer";
import AboutMe from "./components/AboutMe";
import Form from "./components/subscribe_form";

const root = ReactDOM.createRoot(document.getElementById("app"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
  },
});
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: { backgroundColor: "rgb(245, 236, 220)" },
      }}
    />
    <React.StrictMode>
   
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About%20me" element={<AboutMe />}></Route>
          <Route path="/subscribe" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  </ThemeProvider>
);
reportWebVitals();
