import React, { useState } from "react";
import { User } from "../types/interface";

interface LoginFormProps {
  users: User[];
  onLoginSuccess: (user: User) => void;
  onRegister: (newUser: User) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  users,
  onLoginSuccess,
  onRegister,
}) => {
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
      // Call the 'onLoginSuccess' callback to pass user data and handle successful login
      onLoginSuccess(user);
    } else {
      alert("Wrong username or password");
    }
  };

  const handleRegister = () => {
    // Check if either username or password is empty
    if (!username || !password) {
      console.log("All fields are required");
      return; // Stop further execution if fields are empty
    }

    // Check if the username is already taken
    const usernameTaken = users.some((user) => user.username === username);

    if (usernameTaken) {
      alert("Username already taken. Please choose a different username.");
    } else {
      const maxId = Math.max(...users.map((user) => user.id), 0);
      const newUser: User = {
        id: maxId + 1,
        username: username,
        password: password,
        role: "user",
        bookings: [],
      };
      alert("registered new user, Welcome!");
      onRegister(newUser);
    }
  };

  return (
    <div className="login-form">
      <form>
        <div className="form-control">
          <input
            placeholder="Username"
            autoComplete="username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            placeholder="Password"
            autoComplete="username"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
