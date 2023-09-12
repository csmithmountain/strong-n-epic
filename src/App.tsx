import React, { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import Data from "./api/Data.json";
import { User, Workout } from "./types/interface";

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [trainingSessions, setTrainingSessions] = useState<Workout[]>([]);

  // Define a callback function to receive loggedInUser data
  const handleLoginSuccess = (user: User) => {
    setLoggedInUser(user);
  };

  // Define a callback function to handle training session deletion
  const handleDelete = (sessionToDelete: Workout) => {
    // Filter out the session to delete from the list
    const updatedSessions = trainingSessions.filter((session) => session !== sessionToDelete);
    setTrainingSessions(updatedSessions);
  };

  // Define a function to handle logout
  const handleLogout = () => {
    setLoggedInUser(null); // Clear the logged-in user
  };

  const isUserLoggedInWithRole = (role: string) => {
    return loggedInUser && loggedInUser.role === role;
  };

  // Use useEffect to set trainingSessions when Data.TrainingSessions is available
  useEffect(() => {
    setTrainingSessions(Data.TrainingSessions);
  }, []);

  return (
    <>
      {loggedInUser ? (
        // User is logged in
        isUserLoggedInWithRole("admin") ? (
          // Admin user
          <AdminPage
            onLogout={handleLogout}
            trainingData={trainingSessions}
            onDelete={handleDelete} // Pass the handleDelete function
          />
        ) : (
          // Regular user
          <BookingPage
            userData={loggedInUser}
            onLogout={handleLogout}
            trainingData={trainingSessions}
          />
        )
      ) : (
        // User is not logged in
        <LandingPage data={Data} onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
