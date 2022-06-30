import React from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Post.sass";

const Post = ({ authorPic, authorName, timeStamp, message, optionalImg }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={authorPic} className="post__avatar" />
        <div className="post_info">
          <h3>{authorName}</h3>
          <p>{timeStamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post__media">
        <img src={optionalImg} className="post__media--img" alt="" />
      </div>
      <div className="post__options">
        <div className="post__options--option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__options--option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__options--option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__options--option nomob">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
