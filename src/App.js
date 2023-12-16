import React, { useState } from "react";
import "./App.css";
import { getUserData } from "./database";
import Home from "./Home";
import "@fontsource/jetbrains-mono";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null);
  const [success, setSuccess] = useState(false); // Successfully logged in

  const handleLogin = () => {
    let userData = getUserData(username, password);
    if (userData.message != null) {
      setError(userData.message);
    } else {
      setSuccess(true);
      setUserData(userData);
      setError("");
    }
  };

  return (
    <div>
      {!success ? (
        <div className="login-user">
          <h1>Flash Friends Login</h1>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <Home userData={userData} />
      )}
    </div>
  );
}

export default App;
