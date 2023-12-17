// FriendList.js
import React, { Component } from 'react';

class FriendList extends Component {
  render() {
    const { friendships } = this.props;

    if (!friendships || friendships.length === 0) {
      return (
        <div>
          <h2>Friends</h2>
          <p>No friends to display</p>
        </div>
      );
    }

    const firstFriend = friendships[1];

    return (
      <div>
        <h2>Friends</h2>
        <ul>
          <li key={firstFriend.id}>{firstFriend.user1_id}</li>
        </ul>
      </div>
    );
  }
}

export default FriendList;
