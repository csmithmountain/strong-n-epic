// LogoutButton.tsx
import React from "react";

interface LogoutButtonProps {
  onLogout: () => void; // Callback function for logout
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout(); // Call the logout callback function
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

