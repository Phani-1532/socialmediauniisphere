import React from "react";
import "./Post.css";

const Post = ({ user, profilePic, time, work, image, caption }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h4 className="user-name">{user}</h4>
          <p className="user-info">{work} · {time} ago</p>
        </div>
        <span className="menu-icon">⋮</span>
      </div>
      <img src={image} className="post-image" alt="Post" />
      <div className="post-body">
        <p className="caption"><strong>{user}</strong> {caption}</p>
      </div>
      <div className="post-actions">
        <span>❤️ Like</span>
        <span>💬 Comment</span>
        <span>🔄 Share</span>
      </div>
    </div>
  );
};

export default Post;
