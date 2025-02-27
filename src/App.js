import React from "react";
import Header from "./components/header/Header";
import SidebarLeft from "./components/sideleftbar/SidebarLeft";
import Feed from "./components/feed/Feed";
import SidebarRight from "./components/siderightbar/SidebarRight";
import Footer from "./components/footer/Footer";
import "./App.css"; // Import CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Fixed Header */}
      <Header />

      <div className="main-content">
        {/* Fixed Left Sidebar */}
        <div className="sidebar-left">
          <SidebarLeft />
        </div>

        {/* Feed Section (scrolls normally) */}
        <div className="feed-container">
          <Feed />
        </div>

        {/* Fixed Right Sidebar */}
        <div className="sidebar-right">
          <SidebarRight />
        </div>
      </div>

      {/* Footer (Visible on mobile) */}
      <div className=" d-xxl-none d-lg-none fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default App;
