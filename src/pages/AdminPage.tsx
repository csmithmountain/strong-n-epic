import React from "react";
import LogoutButton from "../components/LogoutButton";
import AddTimeForm from "../components/AddTimeForm";
import AdminTimeTable from "../components/AdminTimeTable";
import { Workout } from "../types/interface";

interface AdminPageProps {
  trainingData: Workout[];
  onLogout: () => void; // Callback function for logout
  onDelete: (sessionToDelete: Workout) => void; // Callback function for delete
}

const AdminPage: React.FC<AdminPageProps> = ({ onLogout, trainingData, onDelete }) => {
  return (
    <>
      <LogoutButton onLogout={onLogout} />
      <AddTimeForm />
      <AdminTimeTable trainingData={trainingData} onDelete={onDelete} /> {/* Pass onDelete prop */}
    </>
  );
};

export default AdminPage;

