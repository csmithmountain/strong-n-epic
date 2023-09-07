// src/pages/LandingPage.tsx

import React from 'react';
import LogoutButton from '../components/LogoutButton';
import TimeTable from '../components/TimeTable';

const UserPage: React.FC = () => {
  return (
    <>
      <LogoutButton />
      <h1>Träningstider</h1>
      <TimeTable />
    </>
  );
};

export default UserPage;