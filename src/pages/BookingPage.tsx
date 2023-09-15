// src/pages/LandingPage.tsx

import React from "react";
import LogoutButton from "../components/LogoutButton";
import CreateTimeTable from "../components/CreateTimeTable";
import { User, Workout } from "../types/interface";

interface BookingPageProps {
  userData: User;
  trainingData: Workout[];
  handleBooking: (sessionId: number) => void;
  handleUnBooking: (sessionId: number) => void;
  onLogout: () => void; // Callback function for logout
}

const BookingPage: React.FC<BookingPageProps> = ({
  userData,
  onLogout,
  trainingData,
  handleBooking,
  handleUnBooking,
}) => {
  return (
    <>
      <LogoutButton onLogout={onLogout} />
      <div>
        <p className="active-user">
          <strong>Logged in user:</strong> {userData.username}
        </p>
      </div>
      <CreateTimeTable
        userData={userData}
        trainingData={trainingData}
        handleBooking={handleBooking}
        handleUnBooking={handleUnBooking}
      />
    </>
  );
};

export default BookingPage;
