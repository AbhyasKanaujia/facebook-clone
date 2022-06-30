import React, { useState } from "react";
import "./PostCreator.sass";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../../StateProvider";
import db, { addDoc, collection } from "../../firebase";

const PostCreator = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    const createPost = async () => {
      try {
        await addDoc(collection(db, "posts"), {
          message: input,
          timestamp: Date.now(),
          authorPic: user.photoURL,
          authorName: user.displayName,
          optionalImg: imageUrl,
        });
      } catch (error) {}
    };

    createPost();

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="postcreator">
      <div className="postcreator__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName}?`}
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
      <div className="postcreator__bottom">
        <div className="postcreator__bottom--option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="postcreator__bottom--option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postcreator__bottom--option nomob">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
