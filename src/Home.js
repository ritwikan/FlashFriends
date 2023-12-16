function Home({ userData }) {
  const user = userData.user;
  const friendships = userData.friendships;
  const events = userData.events;
  return (
    <div>
      <h1>{user.firstname}</h1>
      <p>hi</p>
    </div>
  );
}

export default Home;
