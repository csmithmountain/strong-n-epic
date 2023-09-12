import React, { useState } from 'react';
import { User } from "../types/interface"

interface LoginFormProps {
  users: User[];
  onLoginSuccess: (user: User) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ users, onLoginSuccess }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    // Check if either username or password is empty
    if (!username || !password) {
      console.log("All fields are required");
      return; // Stop further execution if fields are empty
    }
  
    // Find the user by username
    const user: User | undefined = users.find((u) => u.username === username);
  
    if (user && user.password === password) {
      console.log("Login successful");

      // Call the 'onLoginSuccess' callback to pass user data and handle successful login
      onLoginSuccess(user);
    } else {
      alert("Wrong username or password");
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
