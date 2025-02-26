import React from "react";
import Post from ".././posts/Post";
import "./Feed.css";
import vijayLogo from '../../assets/postImages/vijayProfile.svg'
import firstImage from '../../assets/images/Leonardo_Phoenix_09_a_photograph_of_a_charming_young_adult_mal_2 1.png'
import secondImage from '../../assets/images/create_an_animated_image_where_5-6_students_are_entering_in_college_from_there_ground_of_the_colleg_2jrrolhhaaohqjuzx6pc_2 1.png'
import thirdImage from '../../assets/images/create_an_animated_image_where_a_young_grown_up_college_student_is_walking_in_college_library_fille_ii19pml2zxelhxbh9hii_1 1.png'
import fouthImage from '../../assets/images/fouthImage.png'
import fifthImage from '../../assets/images/Analytical Thinking 1.png'
import sixthImage from '../../assets/images/Team Management 1.png'
import seventhImage from '../../assets/images/Problem Solving with Technology 1.png'
import eigthImage from '../../assets/images/ninthImage.png'
import ninthImage from '../../assets/images/ninthImage.png'
import Duck from '../../assets/images/1732187508671-325022206217369611306360986715410808678 1.png'
import BitCoin from '../../assets/images/5c306e71eea40ad8729d3545bb69b8c4 1.png'
import Tree from '../../assets/images/Eve 1.png'
import Soilder from '../../assets/images/soldier-boy-character-videogame 1.png'
const Feed = () => {
  const user = {
    name: "Vijay Prasad",
    profilePic: vijayLogo,
    caption: "Been have evolved to go in the university and will probably prefer the university of... more",
    work: "University of Delhi| Works at Google",
    time:"18h",
    likes:"4022"
  };

  const posts = [
    {
      id: 1,
      image: firstImage,
    },
    {
      id: 2,
      image: secondImage,
    },
    {
      id: 3,
      image: thirdImage,
    },
    {
      id: 4,
      image: fouthImage,
    },
    {
      id: 5,
      image: fifthImage,
    },
    {
      id: 6,
      image: sixthImage,
    },
    {
      id: 7,
      image: seventhImage,
    },
    {
      id: 8,
      images: [eigthImage, Duck, BitCoin, Tree, Soilder], // Add extra images here
    },
    {
      id: 9,
      image: ninthImage,
    },
  ];
  
  

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <Post
          key={post.id}
          user={user.name}
          profilePic={user.profilePic}
          time={user.time}
          work={user.work}
          images={post.images || [post.image]}  // Handle single vs multiple images
          caption={user.caption}
          likes={user.likes}
        />
      ))}
    </div>
  );
  
  
};

export default Feed;
