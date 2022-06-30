import React from "react";
import "./RightSidebar.sass";
import Birthdays from "../birthdays/Birthdays";
import ChatContacts from "../chatContacts/ChatContacts";

const RightSidebar = () => {
  return (
    <div className="sidebar sidebar__right">
      <Birthdays />
      <ChatContacts />
    </div>
  );
};

export default RightSidebar;
