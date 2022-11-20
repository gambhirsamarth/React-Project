import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Language />

          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/001/541/050/small_2x/boy-cartoon-face-free-vector.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
