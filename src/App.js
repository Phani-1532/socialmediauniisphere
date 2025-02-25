import React from "react";
import Header from "./components/header/Header";
import SidebarLeft from "./components/SidebarLeft";
import Feed from "./components/feed/Feed";
import SidebarRight from "./components/SidebarRight";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        {/* Left Sidebar (Hidden on Mobile) */}
        <div className="d-none d-md-block col-md-3">
          <SidebarLeft />
        </div>

        {/* Feed (Main Content) */}
        <div className="col-12 col-md-6">
          <Feed />
        </div>

        {/* Right Sidebar (Hidden on Mobile) */}
        <div className="d-none d-md-block col-md-3">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default App;
