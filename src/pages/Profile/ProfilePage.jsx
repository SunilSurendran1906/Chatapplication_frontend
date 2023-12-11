import React from "react";
import "./ProfilePage.css";
import ProfileLeft from "../ProfileLeft/ProfileLeft.jsx";
import ProfileCard from "../../components/ProfileSide/ProfileCard/ProfileCard.jsx";
import PostSide from "../../components/ProfileSide/PostSide/PostSide.jsx";
import RightSide from "../../components/ProfileSide/RightSide/RightSide.jsx";
function ProfilePage(props) {
  return (
    <div className="ProfilePage">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
}

export default ProfilePage;
