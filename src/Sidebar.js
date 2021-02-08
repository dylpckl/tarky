import { AssignmentLate, MeetingRoom } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <div class="sidebarRowOption">
        <SidebarRow src="https://picsum.photos/id/1/200/300" title="dyl" />
      </div>

      <div class="sidebarRowOption">
        <SidebarRow Icon={AssignmentLate} title="Tasks" />
      </div>

      <div class="sidebarRowOption--active">
        <SidebarRow Icon={MeetingRoom} title="Lobby" />
      </div>
    </div>
  );
}

export default Sidebar;
