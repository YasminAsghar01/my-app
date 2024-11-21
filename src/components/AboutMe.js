import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import me from "../images/aboutme.jpg";
import cyprus from "../images/cyprus.jpg";
import food from "../images/food.jpg";
import coding from "../images/coding.jpg";
import books from "../images/books.jpg";
import instagram from "../images/insta.png";
import snapchat from "../images/snapchat.png";
import linkedin from "../images/linkedin.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";

export default function MultiActionAreaCard() {
  return (
    <>
      <Box
        component="img"
        padding={10}
        sx={{
          height: 500,
          width: 400,
        }}
        alt="About Me"
        src={me}
      />
      <Typography
        sx={{
          marginRight: 10,
          marginLeft: 70,
          position: "relative",
          bottom: 500,
          display: "block",
          fontFamily: "cursive",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Hey! I'm Yasmin. I'm 20 years old and I'm a software engineer apprentice
        at KPMG.
      </Typography>

      <Typography
        sx={{
          marginRight: 10,
          marginLeft: 70,
          position: "relative",
          bottom: 450,
          display: "block",
          fontFamily: "cursive",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {" "}
        I created this website not only to help me develop my coding skills but
        also to give you all an insight into my life. I have content from my
        favourite shows and recipes to the best places to visit. Hopefully
        there's something on this site that interest you! You can contact me on
        any of my socials and have discussion with myself and others via the
        forum.{" "}
      </Typography>
      <Typography
        sx={{
          marginRight: 10,
          marginLeft: 70,
          position: "relative",
          bottom: 400,
          display: "block",
          fontFamily: "cursive",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        {" "}
        Don't forget to subscribe so you get notified everytime I add a new
        post.{" "}
      </Typography>
      <Typography
        textAlign="center"
        position="relative"
        marginTop={-25}
        fontSize={30}
      >
        Want to get in touch?
      </Typography>
      <Typography
        textAlign="center"
        position="relative"
        marginTop={-1}
        fontSize={20}
      >
        Follow me on all my platforms
      </Typography>
      <Box textAlign="center" marginBottom={10}>
        <IconButton href="https://www.instagram.com/yasminasghar1/" target="_blank">
          <img src={instagram} alt="Instagram" height={50} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/yasmin-asghar/" target="_blank">
          <img src={linkedin} alt="linkedIn" height={50} flexDirection="row" />
        </IconButton>
        <IconButton href="http://www.snapchat.com/add/yazzieyasmin1" target="_blank">
          <img src={snapchat} alt="Snapchat" height={50} flexDirection="row" />
        </IconButton>
      </Box>
      <ImageList
        sx={{ width: 1450, height: 250, display: "flex", position: "relative" }}
      >
        <ImageListItem sx={{ flexDirection: "row" }}>
          <img src={food} alt="tets" />
          <img src={cyprus} alt="tets" />
          <img src={coding} alt="tets" />
          <img src={books} alt="tets" />
        </ImageListItem>
      </ImageList>
    </>
  );
}
