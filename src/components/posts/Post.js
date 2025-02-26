import React from "react";
import "./Post.css";

const Post = ({ user, profilePic, time, work, images, caption, likes }) => {
  return (
    <div className="post-card">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>
      <div className="blob blob6"></div>
      <div className="blob blob7"></div>
      <div className="blob blob8"></div>

      <div className="post-header">
        <img src={profilePic} alt="Profile" className="profile-pic" id="pic" />
        <div>
          <h4 className="user-name">
            {user} <span className="time">{time} ago</span>
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
          </h4>
          <p className="user-info">{work}</p>
        </div>
        <span className="menu-icon">⋮</span>
      </div>

      {/* Render multiple images for the 8th post */}
      {images && images.length > 1 ? (
  <div className="multi-image-grid">
    {/* Left Side: Jerry's Image */}
    <img src={images[0]} className="post-image" alt="Jerry" />

    {/* Right Side: Other Images */}
    <div className="multi-image-right">
      {/* Top Image */}
      <img src={images[2]} className="post-image" alt="Top Right" />

      {/* Middle Row (Two Images Side by Side) */}
      <div className="middle-images">
        <img src={images[1]} className="post-image" alt="Middle Left" />
        <img src={images[3]} className="post-image" alt="Middle Right" />
      </div>

      {/* Bottom Image */}
      <img src={images[4]} className="post-image" alt="Bottom" />
    </div>
  </div>
) : (
  <img src={images} className="post-image" alt="Post" />
)}

      <div className="post-footer">
        <span className="likes-count">{likes} Likes</span>
        <div className="post-actions">
          <button className="connect-btn1">
            <span className="color1">+</span>
            <span className="color2">C</span>
            <span className="color3">O</span>
            <span className="color4">N</span>
            <span className="color5">N</span>
            <span className="color6">E</span>
            <span className="color7">C</span>
            <span className="color8">T</span>
          </button>

          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/share.png" alt="share" />
          <img width="24" height="24" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="speech-bubble--v1" />
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/filled-like.png" alt="filled-like" />
        </div>
      </div>

      <div className="post-body">
        <p className="caption"><strong>{user}</strong> {caption}</p>
      </div>
    </div>
  );
};

export default Post