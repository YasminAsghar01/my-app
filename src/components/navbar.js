import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0,0,0)",
      },
    },
  });
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleClose = () => {
    setOpenMenu(null);
  };
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgb(238, 231, 212)", color: "black" }}
      >
        <Toolbar>
          <Stack direction="row" spacing={25}>
            <Button
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Lifestyle
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={openMenu}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link to="/Career" style={linkStyle}>
                <MenuItem onClick={handleClose}>Career</MenuItem>
              </Link>
              <Link to="/Travel" style={linkStyle}>
                <MenuItem onClick={handleClose}>Travel</MenuItem>
              </Link>
              <Link to="/Beauty%20and%20Skincare" style={linkStyle}>
                <MenuItem onClick={handleClose}>Beauty and Skincare</MenuItem>
              </Link>
              <Link to="/Food" style={linkStyle}>
                <MenuItem onClick={handleClose}>Food</MenuItem>
              </Link>
              <Link to="/Books" style={linkStyle}>
                <MenuItem onClick={handleClose}>Books</MenuItem>
              </Link>
              <Link to="/Movie%20and%20series" style={linkStyle}>
                <MenuItem onClick={handleClose}>Movies and series</MenuItem>
              </Link>
            </Menu>
            <Button href="/About%20me">About Me</Button>
            <Button href="/">
              <Typography align="center" fontFamily="cursive" fontSize={20}>
                LIFE WITH YASMIN
              </Typography>
            </Button>
            <Button href="/forum">Forum</Button>
            <Button href="/subscribe">Subscribe</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
