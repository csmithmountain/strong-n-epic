import React from "react";
import LoginForm from "../components/LoginForm";
import { User } from "../types/interface";

interface LandingPageProps {
  users: User[];
  onLoginSuccess: (user: User) => void; // Define the callback prop
  onRegister: (newUser: User) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  users,
  onLoginSuccess,
  onRegister,
}) => {
  return (
    <div className="landing-page">
      <h1>Strong n' Epic</h1>
      <LoginForm
        users={users}
        onLoginSuccess={onLoginSuccess}
        onRegister={onRegister}
      />
    </div>
  );
};

export default LandingPage;
