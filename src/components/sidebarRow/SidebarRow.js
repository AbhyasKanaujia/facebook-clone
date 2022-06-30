import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarRow.sass";

const SidebarRow = ({ title, src, Icon, birthdays }) => {
  return (
    <div className="sidebar__row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      {title && <h4>{title}</h4>}
      {birthdays &&
        (birthdays.length > 1 ? (
          <span>
            <b>{birthdays[0]}</b> and <b>other {birthdays.length - 1}</b>
          </span>
        ) : (
          <span>
            Today is <b>{birthdays[0]}</b>'s birthday.
          </span>
        ))}
    </div>
  );
};

export default SidebarRow;
