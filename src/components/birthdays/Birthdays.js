import React from "react";
import SidebarRow from "../sidebarRow/SidebarRow";
import CakeIcon from "@mui/icons-material/Cake";
import "./Birthdays.sass";

const Birthday = () => {
  return (
    <div className="birthdays birthdays__wrp">
      <h4 className="birthdays__header">Birthdays</h4>
      <SidebarRow
        Icon={CakeIcon}
        birthdays={[
          "Kavya Bhatnagar",
          "Divya Bhatnagar",
          "Anisu Kanaujia",
          "Veenita Bhatangar",
        ]}
      />
    </div>
  );
};

export default Birthday;
