import React from "react";

const SidebarLeft = () => {
  return (
    <div className="col-md-3 sidebar">
      <h5 className="mb-3">📅 Upcoming Events</h5>
      <ul className="list-unstyled">
        <li>🎉 Event 1 - Jan 20</li>
        <li>🎊 Event 2 - Feb 15</li>
      </ul>
      <hr />
      <h5 className="mb-3">🔥 Trending News</h5>
      <ul className="list-unstyled">
        <li>🚀 Tech Conference Next Week!</li>
        <li>📢 New Feature Released</li>
      </ul>
    </div>
  );
};

export default SidebarLeft;
