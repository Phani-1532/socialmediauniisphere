import React, { useState, useEffect } from 'react';
import './Header.css';
import Home from '../../assets/headerImages/Home.svg';
import Network from '../../assets/headerImages/networkIcon.svg';
import Calender from '../../assets/headerImages/calenderIcon.svg';
import Plus from '../../assets/headerImages/plusIcon.svg';
import Notification from '../../assets/headerImages/notificationsIcon.svg';
import Profile from '../../assets/headerImages/profile.svg';
import Message from '../../assets/headerImages/messageIcon.svg';
import Logo from '../../assets/headerImages/logo.svg';

const Header = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      {/* Desktop Navbar */}
      {!isMobile && (
        <div className="desktop-nav">
          <div className="nav-icons">
            <div
              className={`icon-container ${activeIcon === "home" ? "active" : ""}`}
              onClick={() => handleIconClick("home")}
            >
              <img src={Home} alt="Home" />
            </div>
            <div
              className={`icon-container ${activeIcon === "network" ? "active" : ""}`}
              onClick={() => handleIconClick("network")}
            >
              <img src={Network} alt="Network" id='network' />
            </div>
            <div
              className={`icon-container ${activeIcon === "calender" ? "active" : ""}`}
              onClick={() => handleIconClick("calender")}
            >
              <img src={Calender} alt="Calendar" id='calender' />
            </div>
            <div
              className={`icon-container ${activeIcon === "add" ? "active" : ""}`}
              onClick={() => handleIconClick("add")}
            >
              <img src={Plus} alt="Add" id='add' />
            </div>
            <div
              className={`icon-container ${activeIcon === "messages" ? "active" : ""}`}
              onClick={() => handleIconClick("messages")}
            >
              <img src={Message} alt="Messages" id='messages' />
            </div>
            <div
              className={`icon-container ${activeIcon === "notifications" ? "active" : ""}`}
              onClick={() => handleIconClick("notifications")}
            >
              <img src={Notification} alt="Notifications" id='notification' />
            </div>
            <img src={Profile} alt="Profile" className='profileLogo' />
            <input type="text" className="search-bar" placeholder="Search..." />
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <div className="mobile-nav">
          <div className="mobile-nav-icons">
            <div className="icon-container">
              <img src={Profile} alt="Profile" className="profileLogo" />
            </div>
            <div className="search-container">
              <input type="text" className="search-bar" placeholder="Search..." />
            </div>
            <div className="icon-container">
              <img src={Message} alt="Messages" className="messages" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
