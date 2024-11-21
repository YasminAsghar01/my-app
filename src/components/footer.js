import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Footer() {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "rgb(238, 231, 212)",
          color: "black",
          alignItems: "center",
          fontFamily: "Roboto",
          position: "static",
        }}
      >
        <Toolbar>COPYRIGHT YASMIN ASGHAR | 2022</Toolbar>
      </AppBar>
    </>
  );
}
export default Footer;
