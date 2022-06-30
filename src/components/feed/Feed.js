import React from "react";
import "./Feed.sass";
import StoryReel from "../storyReel/StoryReel";
import PostCreator from "../postCreator/PostCreator";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <PostCreator />
      <Post />
      <Post
        authorPic="https://source.unsplash.com/random/300x300/?beautiful,girl"
        authorName="Divya Bhatnagar"
        message="Nice First Post Girllll"
        optionalImg="https://source.unsplash.com/random/300x300?travel,girl"
      />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
