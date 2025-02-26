import React, { useState } from "react";
import "./Footer.css";
import Home from '../../assets/headerImages/Home.svg';
import Plus from '../../assets/headerImages/plusIcon.svg';
import Network from '../../assets/headerImages/networkIcon.svg';
import Calender from '../../assets/headerImages/calenderIcon.svg';
import Notification from '../../assets/headerImages/notificationsIcon.svg';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="footer">
      <div
        className={`footer-icon ${activeIcon === "home" ? "active" : ""}`}
        onClick={() => handleIconClick("home")}
      >
        <img src={Home} alt="Home" />
      </div>
      <div
        className={`footer-icon ${activeIcon === "notification" ? "active" : ""}`}
        onClick={() => handleIconClick("notification")}
      >
        <img src={Notification} alt="Notifications" />
      </div>
      <div
        className={`footer-icon ${activeIcon === "add" ? "active" : ""}`}
        onClick={() => handleIconClick("add")}
      >
        <img src={Plus} alt="Add" />
      </div>
      <div
        className={`footer-icon ${activeIcon === "calendar" ? "active" : ""}`}
        onClick={() => handleIconClick("calendar")}
      >
        <img src={Calender} alt="Calendar" />
      </div>
      <div
        className={`footer-icon ${activeIcon === "network" ? "active" : ""}`}
        onClick={() => handleIconClick("network")}
      >
        <img src={Network} alt="Network" />
      </div>
    </div>
  );
};

export default Footer;
