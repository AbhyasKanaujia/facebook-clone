import React from "react";
import "./Story.sass";
import { Avatar } from "@mui/material";

const Stroy = ({ image, authorPic, authorName }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={authorPic} />
      <h4>{authorName}</h4>
    </div>
  );
};

export default Stroy;
