// src/pages/AdminPage.tsx

import React from "react";
import LogoutButton from "../components/LogoutButton";
import AddTimeForm from "../components/AddTimeForm";

const AdminPage: React.FC = () => {
  return (
    <>
      <LogoutButton />
      <h1>Admin</h1>
      <AddTimeForm />
    </>
  );
};

export default AdminPage;
