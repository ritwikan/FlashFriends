import "./Home.css";
import "@fontsource/jetbrains-mono";
import React from 'react';
import ProfilePage from './ProfilePage';

function Home({ userData }) {
  const user = userData.user;
  const friendships = userData.friendships;
  const events = userData.events;
  return (
    <div className="sqare">
      <ProfilePage user={userData.user} />
    </div>
  );
}

export default Home;
