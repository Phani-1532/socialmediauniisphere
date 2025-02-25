import React from 'react';
import './Header.css';
import Home from '../../assets/headerImages/Home.svg'
import Logo from '../../assets/headerImages/logo.svg'
import Network from '../../assets/headerImages/networkIcon.svg'
import Calender from '../../assets/headerImages/calenderIcon.svg'
import Plus from '../../assets/headerImages/plusIcon.svg'
import Notification from '../../assets/headerImages/notificationsIcon.svg'
import Profile from '../../assets/headerImages/profile.svg'
import Message from '../../assets/headerImages/messageIcon.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="nav-icons">
        <img src={Home} alt="Home" />
        <img src={Network} alt="Network" />
        <img src={Calender} alt="Calendar" />
        <img src={Plus} alt="Add" />
        <img src={Message} alt="Messages" />
        <img src={Notification} alt='Notifications' />
        <img src={Profile} alt="Profile" className="profile-pic" />
        <input type="text" className="search-bar" />
        <img src={Logo} alt="Logo" className="logo" />
      </div>

    </div>
  );
};

export default Header;
