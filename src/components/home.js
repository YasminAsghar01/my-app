import * as React from "react";
import { styled } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export default function HomePage() {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <ImageList cols={2} gap={8}>
      {itemData.map((item) => (
        <LightTooltip title={item.title} followCursor={true}>
          <ImageListItem
            key={item.img}
            component={Link}
            to={item.title}
            style={linkStyle}
          >
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{ textAlign: "center" }}
              position="below"
              title={item.title}
            />
          </ImageListItem>
        </LightTooltip>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://source.unsplash.com/k-rKfqSm4L4",
    title: "Career",
  },
  {
    img: "https://source.unsplash.com/fk3XUcfTAvk",
    title: "Travel",
  },

  {
    img: "https://source.unsplash.com/kSj37Re1VZQ",
    title: "Beauty and Skincare",
  },
  {
    img: "https://source.unsplash.com/nTZOILVZuOg",
    title: "Food",
  },
  {
    img: "https://source.unsplash.com/yI-XIxbPg4Q",
    title: "Books",
  },
  {
    img: "https://source.unsplash.com/11SgH7U6TmI",
    title: "Movie and series",
  },
];
