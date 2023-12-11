import React from 'react';
import "./Home.css"
import ProfileSide from '../../components/ProfileSide/ProfileSides.jsx';
import PostSide from '../../components/ProfileSide/PostSide/PostSide.jsx';
import RightSide from '../../components/ProfileSide/RightSide/RightSide.jsx';

function Home(props) {
    return (
        <div className='Home'>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    );
}

export default Home;