// ProfilePage.js
import React, { Component } from 'react';
import FriendList from './FriendList';

class ProfilePage extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>{user.firstname}'s Profile</h1>
        <FriendList friendships={user.friendships} />
      </div>
    );
  }
}

export default ProfilePage;
