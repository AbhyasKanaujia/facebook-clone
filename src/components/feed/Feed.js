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
      <Post
        authorPic="https://source.unsplash.com/random/300x300/?beautiful,girl"
        authorName="Divya Bhatnagar"
        message={"Sample Post"}
        optionalImg="https://source.unsplash.com/random/500x500?travel,girl"
      />
      <Post
        authorPic="https://source.unsplash.com/random/300x300/?face,beautiful,woman"
        authorName="Kavya Bhatnagar"
        message="Hey, nice first post"
        optionalImg="https://source.unsplash.com/random/500x500?momos,dish"
      />
    </div>
  );
};

export default Feed;
