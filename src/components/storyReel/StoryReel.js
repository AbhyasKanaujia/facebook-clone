import React from "react";
import Story from "../story/Story";
import "./StoryReel.sass";

const StoryReel = () => {
  return (
    <div className="stories">
      <Story
        image="https://source.unsplash.com/random/?food"
        authorPic="https://source.unsplash.com/random/300x300/?face,beautiful,woman"
        authorName="Kavya Batnagar"
      />
      <Story
        image="https://source.unsplash.com/random/?gamer,girl"
        authorPic="https://source.unsplash.com/random/300x300/?girl,beautiful,face"
        authorName="Divya Bhatnagar"
      />
      <Story
        image="https://source.unsplash.com/random/?life,hope,love"
        authorPic="https://source.unsplash.com/random/300x300/?girl,angel,heaven"
        authorName="Anisu Neeti Kanaujia"
      />
      <Story
        image="https://source.unsplash.com/random/?tech"
        authorPic="https://source.unsplash.com/random/300x300/?boy"
        authorName="Abhyas Kanaujia"
      />
      <Story
        image="https://source.unsplash.com/random/?mountain"
        authorPic="https://source.unsplash.com/random/300x300/?old,man"
        authorName="Anil Kumar"
      />
    </div>
  );
};

export default StoryReel;
