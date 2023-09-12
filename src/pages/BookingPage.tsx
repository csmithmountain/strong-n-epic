// src/pages/LandingPage.tsx

import React from 'react';
import LogoutButton from '../components/LogoutButton';
import TimeTable from '../components/TimeTable';
import { User, Workout } from "../types/interface";

interface BookingPageProps {
  userData: User;
  trainingData: Workout[];
  onLogout: () => void; // Callback function for logout
}

const BookingPage: React.FC<BookingPageProps> = ({userData, onLogout, trainingData}) => {
  return (
    <>
      <LogoutButton onLogout={onLogout} />
      <TimeTable userData={userData} trainingData={trainingData}/>
    </>
  );
};

export default BookingPage;