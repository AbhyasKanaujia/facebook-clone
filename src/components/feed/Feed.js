import React, { useEffect, useState } from "react";
import "./Feed.sass";
import StoryReel from "../storyReel/StoryReel";
import PostCreator from "../postCreator/PostCreator";
import Post from "../post/Post";
import db, { collection } from "../../firebase";
import { getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostCreator />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          authorPic={post.data.authorPic}
          authorName={post.data.authorName}
          timeStamp={post.data.timeStamp}
          message={post.data.message}
          optionalImg={post.data.optionalImg}
        />
      ))}
    </div>
  );
};

export default Feed;
