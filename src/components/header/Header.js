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
        <img src={Home} alt="Home" className='home' />
        <img src={Network} alt="Network" className='network' />
        <img src={Calender} alt="Calendar" className='calender' />
        <img src={Plus} alt="Add" className='add' />
        <img src={Message} alt="Messages" className='messages' />
        <img src={Notification} alt='Notifications' className='notifications' />
        <img src={Profile} alt="Profile" className="profile-pic" />
        <input type="text" className="search-bar" />
        <img src={Logo} alt="Logo" className="logo" />
      </div>

    </div>
  );
};

export default Header;
