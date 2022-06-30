import React from "react";
import "./ChatContacts.sass";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Contact from "../contact/Contact.js";

const ChatContacts = () => {
  return (
    <div className="contacts contacts__wrp">
      <div className="contacts__header wrp">
        <h4 className="contacts__header--title">Contacts</h4>
        <div className="contacts__header--icons">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <Contact
        contactAvatar="https://source.unsplash.com/random/300x300/?face,beautiful,woman"
        contactName="Kavya Bhatnagar"
      />
      <Contact
        contactAvatar="https://source.unsplash.com/random/300x300/?girl,beautiful,face"
        contactName="Divya Bhatnagar"
      />
      <Contact
        contactAvatar="https://source.unsplash.com/random/300x300/?girl,angel,heaven"
        contactName="Anisu Neeti kanaujia"
      />
      <Contact
        contactAvatar="https://source.unsplash.com/random/300x300/?boy"
        contactName="Abhyas Kanaujia"
      />
      <Contact
        contactAvatar="https://source.unsplash.com/random/300x300/?old,man"
        contactName="Anil Kumar"
      />
    </div>
  );
};

export default ChatContacts;
