import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import Data from '../api/Data.json';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

// Define types or interfaces for your data
interface UserData {
  id: number;
  username: string;
  password: string;
  role: string;
  bookings: number[]; // Array of session IDs
}




const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogin = () => {
    // Check if either username or password is empty
    if (!username || !password) {
      console.log("All fields are required");
      return; // Stop further execution if fields are empty
    }
  
    // Find the user by username
    const user: UserData | undefined = Data.Users.find((u) => u.username === username);
  
    if (user && user.password === password) {
      console.log("Login successful");

      // Redirect to BookingPage and pass user data as state
      if (user.role === "admin"){
        navigate('/Admin', { state: { user } });
      }else{
        navigate('/User', { state: { user } });
      }
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
