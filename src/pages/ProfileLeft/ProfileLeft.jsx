import React from "react";
import "./ProfileLeft.css";
import FollowersCard from "../../components/ProfileSide/FollowersCard/FollowersCard.jsx";
import LogoSreach from "../../components/ProfileSide/LogoSearch/LogoSearch.jsx";
import InfoCard from "../../components/InfoCard/InfoCard.jsx";
function ProfileLeft(props) {
  return (
    <div className="ProfileLeft">
      <LogoSreach />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft;
