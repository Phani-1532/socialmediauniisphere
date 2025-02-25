import React from "react";
import Header from "./components/header/Header";
import SidebarLeft from "./components/sideleftbar/SidebarLeft";
import Feed from "./components/feed/Feed";
import SidebarRight from "./components/siderightbar/SidebarRight";
import Footer from "./components/footer/Footer"; // Import Footer Component

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

      {/* Footer (Visible on Mobile Only) */}
      <div className="d-md-none">
        <Footer />
      </div>
    </div>
  );
};

export default App;
