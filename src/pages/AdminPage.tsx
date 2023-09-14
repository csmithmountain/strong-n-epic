import React, { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import AddTimeForm from "../components/AddTimeForm";
import AdminTimeTable from "../components/AdminTimeTable";
import AdminUserTable from "../components/AdminUsersTable";
import { Workout, User } from "../types/interface";

interface AdminPageProps {
  userData: User;
  trainingData: Workout[];
  onLogout: () => void; // Callback function for logout
  newAddWorkout: (addWorkout: Workout) => void;
  onDelete: (sessionToDelete: Workout) => void; // Callback function for delete
}

const AdminPage: React.FC<AdminPageProps> = ({
  onLogout,
  trainingData,
  newAddWorkout,
  onDelete,
  userData,
}) => {
  const [View, SetView] = useState<boolean>(true);

  const toggleView = () => {
    SetView(!View);
  };

  return (
    <>
      <LogoutButton onLogout={onLogout} />
      <div>{userData.username}</div>
      <button onClick={toggleView}>{View ? "User view" : "Admin view"}</button>
      {View ? (
        <>
          <AddTimeForm
            trainingData={trainingData}
            newAddWorkout={newAddWorkout}
          />
          <AdminTimeTable trainingData={trainingData} onDelete={onDelete} />{" "}
        </>
      ) : (
        <AdminUserTable trainingData={trainingData} />
      )}
    </>
  );
};

export default AdminPage;

// const [isRegistering, setIsRegistering] = useState(false);

// <button type="submit">{isRegistering ? "Register" : "Login"}</button>

// {onClick={() => setHidden(!hidden)}}
