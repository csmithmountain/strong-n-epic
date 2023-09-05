// src/pages/LandingPage.tsx

import React from 'react';
import LogoutButton from '../components/LogoutButton';

const UserPage: React.FC = () => {
  return (
    <>
      <LogoutButton />
      <h1>Träningstider</h1>
    </>
  );
};

export default UserPage;