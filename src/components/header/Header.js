import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionOutLinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import { Avatar, IconButton } from "@mui/material";
import "./Header.sass";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <nav className="header">
      <div className="header__left">
        <img
          className="logo "
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt=""
        />
        <div className="header__left--input">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Facebook"
            className="searchinput"
          />
        </div>
        <IconButton className="searchinput__mob">
          <SearchIcon />
        </IconButton>
      </div>

      <div className="header__middle">
        <div className="header__middle--option header__middle--option-active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__middle--option">
          <SubscriptionOutLinedIcon fontSize="large" />
        </div>
        <div className="header__middle--option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__middle--option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__middle--option">
          <SupervisedUserCircleRoundedIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__right--info">
          <Avatar src={user.photoURL} />
          <h4 className="displayname">{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Header;
