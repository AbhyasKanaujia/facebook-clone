import React, { useState } from "react";
import "./PostCreator.sass";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const PostCreator = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="postcreator">
      {/* Top */}
      <div className="postcreator__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind, Kavya Bhatnagar?"
            type="text"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image Url (optional)"
            type="text"
          />
          <button onClick={handleSubmit} type="submit" className="">
            Submit
          </button>
        </form>
      </div>
      {/* Buttom */}
      <div className="postcreator__bottom">
        <div className="postcreator__bottom--option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="postcreator__bottom--option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postcreator__bottom--option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
