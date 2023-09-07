import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();



 const handleLogin = () => {


  // Check if either username or password is empty
  if (!username || !password) {
    console.log("All fields are required");
    return; // Stop further execution if fields are empty
  }

  // Check for the admin credentials
  if (username === "admin" && password === "admin") {
    navigate("/Admin");
  } else {
    navigate("/User");
  }
};


  return (
    <div style={{ background: "gray", padding: "1rem" }}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default LoginForm;
