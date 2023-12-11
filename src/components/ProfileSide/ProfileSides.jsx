import React from 'react';
import LogoSearch from './LogoSearch/LogoSearch';
import ProfileCard from '../../components/ProfileSide/ProfileCard/ProfileCard.jsx';
import './ProfileSide.css'
import FollowersCard from './FollowersCard/FollowersCard.jsx';
function ProfileSide(props) {
    return (
        <div className='ProfileSide'>
           <LogoSearch/>
           <ProfileCard/>
           <FollowersCard/>
        </div>
    );
}

export default ProfileSide;