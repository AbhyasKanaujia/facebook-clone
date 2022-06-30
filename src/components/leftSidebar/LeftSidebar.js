import React from "react";
import "./LeftSidebar.sass";
import SidebarRow from "../sidebarRow/SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "../../StateProvider";

const LeftSidebar = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar sidebar__left">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
    </div>
  );
};

export default LeftSidebar;
