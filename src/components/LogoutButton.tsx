import React from "react";
import { useNavigate } from "react-router";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => navigate('../');

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
