// src/pages/LandingPage.tsx

import React from "react";
import LogoutButton from "../components/LogoutButton";
import CreateTimeTable from "../components/CreateTimeTable";
import { User, Workout } from "../types/interface";

interface BookingPageProps {
  userData: User;
  trainingData: Workout[];
  onLogout: () => void; // Callback function for logout
}

const BookingPage: React.FC<BookingPageProps> = ({
  userData,
  onLogout,
  trainingData,
}) => {
  return (
    <>
      <LogoutButton onLogout={onLogout} />
      <CreateTimeTable userData={userData} trainingData={trainingData} />
    </>
  );
};

export default BookingPage;
