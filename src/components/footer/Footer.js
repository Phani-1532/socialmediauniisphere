import React from "react";
import "./Footer.css";
import Home from '../../assets/headerImages/Home.svg'
import Plus from '../../assets/headerImages/plusIcon.svg'
import Network from '../../assets/headerImages/networkIcon.svg'
import Calender from '../../assets/headerImages/calenderIcon.svg'
import Notification from '../../assets/headerImages/notificationsIcon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Home} alt="Home" />
        <img src={Notification} alt='Notifications' />
        <img src={Plus} alt="Add" />
        <img src={Calender} alt="Calendar" />
        <img src={Network} alt="Network" />
    </div>
  );
};

export default Footer;
