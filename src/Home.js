import "./Home.css";
import "@fontsource/jetbrains-mono";

function Home({ userData }) {
  const user = userData.user;
  const friendships = userData.friendships;
  const events = userData.events;
  return (
    <div className="login-title">
      <h1>{user.firstname}</h1>
      <p>hi</p>
    </div>
  );
}

export default Home;
