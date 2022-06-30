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

const LeftSidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/117907612_3563992490279505_8451429859961719128_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=v10vTrNDTuQAX_BOoTp&_nc_ht=scontent-mxp1-1.xx&oh=4886f877009445fd6742f10b84018eb7&oe=5F77D6B6"
        title="Kavya Bhatnagar"
      />
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
