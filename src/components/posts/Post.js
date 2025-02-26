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
            <button className="connect-btn">
            <span className="color1">+</span>
            <span> </span>
        <span className="color2">C</span>
        <span className="color3">O</span>
        <span className="color4">N</span>
        <span className="color5">N</span>
        <span className="color6">E</span>
        <span className="color7">C</span>
        <span className="color8">T</span>
            </button>
          </h4>
          <p className="user-info">{work}</p>
        </div>
        <span className="menu-icon">⋮</span>
      </div>

      <img src={image} className="post-image" alt="Post" />

      <div className="post-footer">
        <span className="likes-count">{likes} Likes</span>
        <div className="post-actions">
      
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/share.png" alt="share"/>
        <img width="24" height="24" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1"/>
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like"/>
         
        </div>
      </div>

      <div className="post-body">
        <p className="caption"><strong>{user}</strong> {caption}</p>
      </div>
    </div>
  );
};

export default Post;
