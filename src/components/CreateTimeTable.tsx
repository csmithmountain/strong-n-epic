import React, { useState } from "react";
import { User, Workout } from "../types/interface";

interface CreateTimeTableProp {
  userData: User;
  trainingData: Workout[];
  handleBooking: (sessionId: number) => void;
  handleUnBooking: (sessionId: number) => void;
}

const CreateTimeTable: React.FC<CreateTimeTableProp> = ({
  userData,
  trainingData,
  handleBooking,
  handleUnBooking,
}) => {
  const [user, setUser] = useState<User | null>(userData);
  const [newTrainingData, setNewTrainingData] =
    useState<Workout[]>(trainingData);

  const bookSession = (sessionId: number) => {
    if (user) {
      const session = newTrainingData.find(
        (session) => session.id === sessionId
      );
      if (session && session.participants.length < session.capacity) {
        // Update the session participants with the username
        const updatedSessions = newTrainingData.map((session) => {
          if (session.id === sessionId) {
            return {
              ...session,
              participants: [...session.participants, user.username],
            };
          }
          return session;
        });

        // Update the user's bookings
        const updatedUser = {
          ...user,
          bookings: [...user.bookings, sessionId],
        };

        handleBooking(sessionId);
        setUser(updatedUser);
        setNewTrainingData(updatedSessions);
      }
    }
  };

  const unbookSession = (sessionId: number) => {
    if (user) {
      // Update the session participants to remove the username
      const updatedSessions = newTrainingData.map((session) => {
        if (session.id === sessionId) {
          return {
            ...session,
            participants: session.participants.filter(
              (participant) => participant !== user.username
            ),
          };
        }
        return session;
      });

      // Update the user's bookings
      const updatedUser = {
        ...user,
        bookings: user.bookings.filter((id) => id !== sessionId),
      };

      handleUnBooking(sessionId);
      setUser(updatedUser);
      setNewTrainingData(updatedSessions);
    }
  };

  const isUserParticipant = (session: Workout) => {
    return user && session.participants.includes(user.username);
  };

  const renderBookingButton = (session: Workout) => {
    if (isUserParticipant(session)) {
      return (
        <button
          onClick={() => unbookSession(session.id)}
          className="unbook-button"
        >
          Unbook
        </button>
      );
    } else {
      return (
        <button onClick={() => bookSession(session.id)} className="book-button">
          Book
        </button>
      );
    }
  };

  return (
    <div className="table-container">
      <h2>Training Sessions</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th className="table-header time-column">Time</th>
            <th className="table-header">Training</th>
            <th className="table-header">Capacity</th>
            <th className="table-header">Booking</th>
          </tr>
        </thead>
        <tbody>
          {newTrainingData.map((session) => (
            <tr key={session.id}>
              <td className="table-cell time-column">
                {session.time.split("T").map((item, index) => (
                  <span key={index}>
                    {item}
                    {index === 0 && <br />}{" "}
                  </span>
                ))}
              </td>

              <td className="table-cell">{session.training}</td>
              <td className="table-cell">{`${session.participants.length}/${session.capacity}`}</td>
              <td className="table-cell">{renderBookingButton(session)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTimeTable;
