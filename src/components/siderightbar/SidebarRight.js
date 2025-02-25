import React from "react";
import "./SidebarRight.css";
import profile from '../../assets/headerImages/profile.svg'
import firstImage from '../../assets/rightSidebarImages/firstImage.svg'
import secondImage from '../../assets/rightSidebarImages/secondImage.svg'
import thirdImage from '../../assets/rightSidebarImages/thirdImage.svg'
import fourthImage from '../../assets/rightSidebarImages/fourthImage.svg'
import fifthImage from '../../assets/rightSidebarImages/fifthImage.svg'
import sixthImage from '../../assets/rightSidebarImages/sixthImage.svg'
import seventhImage from '../../assets/rightSidebarImages/seventhImage.svg'




const SidebarRight = () => {
  const user = {
    name: "Rahul Verma",
    designation: "Uniisphere",
    location: "New Delhi, Delhi",
    profilePic: profile,
    followers: 254,
    collaborations: 579,
    bio: "The actual idea of Uniisphere was of The Founder Himanshu who worked for months...",
  };

  const suggestions = [
    { id: 1, name: "Ajay Pratap", university: "BHU (Banaras)", image: firstImage },
    { id: 2, name: "Ajay Pratap", university: "BHU (Banaras)", image: thirdImage },
    { id: 3, name: "Ajay Pratap", university: "BHU (Banaras)", image: fifthImage },
    { id: 4, name: "Ajay Pratap", university: "BHU (Banaras)", image: fourthImage },
    { id: 5, name: "Ajay Pratap", university: "BHU (Banaras)", image: fifthImage },
    { id: 6, name: "Ajay Pratap", university: "BHU (Banaras)", image: sixthImage },
    { id: 7, name: "Ajay Pratap", university: "BHU (Banaras)", image: seventhImage },
  ];

  return (
    <div className="right-sidebar">
      <div className="profile-card">
        <div className="profile">
          <div className="profile-section">
            <div className="image">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            </div>
            <div className="follow-actions">
              <div className="follow-section">
                <span>{user.followers}</span>
                <span>{user.collaborations}</span>
              </div>
              <div className="connect-buttons">
                <button className="connect-btn">Connect</button>
                <button className="collaborate-btn">Collaborate</button>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-designation">{user.designation}</p>
            <p className="user-location">{user.location}</p>
            <p className="user-bio">
              {user.bio} <span className="see-more">see more</span>
            </p>
          </div>
        </div>

      </div>





      <div className="suggested-section">
        <h4>Suggested</h4>
        {suggestions.map((suggest) => (
          <div key={suggest.id} className="suggested-user">
            <img src={suggest.image} alt="Suggested Profile" className="suggested-pic" />
            <div className="suggested-info">
              <p className="suggested-name">{suggest.name}</p>
              <p className="suggested-university">{suggest.university}</p>
            </div>
            <button className="connect-suggested-btn">+ CONNECT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
