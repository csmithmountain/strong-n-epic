import React from "react";
import LoginForm from "../components/LoginForm";
import { Data, User } from "../types/interface";

interface LandingPageProps {
  data: Data;
  onLoginSuccess: (user: User) => void; // Define the callback prop
}

const LandingPage: React.FC<LandingPageProps> = ({ data, onLoginSuccess }) => {

  return (
    <>
      <h1>Strong n' Epic</h1>
      <LoginForm users={data.Users} onLoginSuccess={onLoginSuccess} />
    </>
  );
};

export default LandingPage;
