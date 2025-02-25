import React from "react";
import "./Post.css";

const Post = ({ user, profilePic, time, work, image, caption }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h4 className="user-name">{user} <span className="time">{time} ago</span></h4>
          <p className="user-info">{work} </p>
        </div>
        <span className="menu-icon">⋮</span>
      </div>

      <img src={image} className="post-image" alt="Post" />

      <div className="post-footer">
        <button className="connect-btn">
        <span className="color1">+</span>
        <span className="color2">C</span>
        <span className="color3">O</span>
        <span className="color4">N</span>
        <span className="color5">N</span>
        <span className="color6">E</span>
        <span className="color7">C</span>
        <span className="color8">T</span>
        </button>
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
