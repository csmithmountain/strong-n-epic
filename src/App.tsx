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
    const updatedSessions = trainingSessions.filter(
      (session) => session !== sessionToDelete
    );
    setTrainingSessions(updatedSessions);
  };

  const addWorkout = (newAddWorkout: Workout) => {
    // Append the new workout to the existing training sessions
    setTrainingSessions((prevSessions) => [...prevSessions, newAddWorkout]);
  };

  const addBooking = (sessionId: number) => {
    if (loggedInUser) {
      // Check if the session is full
      const session = trainingSessions.find(
        (session) => session.id === sessionId
      );
      if (session && session.participants.length < session.capacity) {
        // Update the session participants with the username
        const updatedSessions = trainingSessions.map((session) => {
          if (session.id === sessionId) {
            return {
              ...session,
              participants: [...session.participants, loggedInUser.username],
            };
          }
          return session;
        });

        // Update the user's bookings
        const updatedUser = {
          ...loggedInUser,
          bookings: [...loggedInUser.bookings, sessionId],
        };

        setLoggedInUser(updatedUser);
        setTrainingSessions(updatedSessions);
      }
    }
  };

  const unBooking = (sessionId: number) => {
    if (loggedInUser) {
      // Update the session participants to remove the username
      const updatedSessions = trainingSessions.map((session) => {
        if (session.id === sessionId) {
          return {
            ...session,
            participants: session.participants.filter(
              (participant) => participant !== loggedInUser.username
            ),
          };
        }
        return session;
      });

      // Update the user's bookings
      const updatedUser = {
        ...loggedInUser,
        bookings: loggedInUser.bookings.filter((id) => id !== sessionId),
      };

      setLoggedInUser(updatedUser);
      setTrainingSessions(updatedSessions);
    }
  }

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
            newAddWorkout={addWorkout}
            onLogout={handleLogout}
            trainingData={trainingSessions}
            onDelete={handleDelete} // Pass the handleDelete function
          />
        ) : (
          // Regular user
          <BookingPage
            handleUnBooking={unBooking}
            handleBooking={addBooking}
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
