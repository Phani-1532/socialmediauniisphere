import React from "react";
import "./Post.css";

const Post = ({ user, profilePic, time, work, image, caption, likes }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profilePic} alt="Profile" className="profile-pic" id="pic" />
        <div>
          <h4 className="user-name">
            {user} <span className="time">{time} ago</span>
            <button className="connect-btn">+Connect</button>
          </h4>
          <p className="user-info">{work}</p>
        </div>
        <span className="menu-icon">⋮</span>
      </div>

      <img src={image} className="post-image" alt="Post" />

      <div className="post-footer">
        <span className="likes-count">{likes} Likes</span>
        <div className="post-actions">
          <span>❤️</span>
          <span>💬</span>
          <span>🔄</span>
        </div>
      </div>

      <div className="post-body">
        <p className="caption"><strong>{user}</strong> {caption}</p>
      </div>
    </div>
  );
};

export default Post;
