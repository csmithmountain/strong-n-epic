import React, { useState } from "react";
import { User, Workout } from "../types/interface";

interface CreateTimeTableProp {
  userData: User;
  trainingData: Workout[];
  handleBooking: (sessionId: number) => void
  handleUnBooking: (sessionId: number) => void
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

        handleBooking(sessionId)
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

      handleUnBooking(sessionId)
      setUser(updatedUser);
      setNewTrainingData(updatedSessions);
    }
  };

  return (
    <div>
      <h2>Training Sessions</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Training</th>
            <th>Capacity</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          {newTrainingData.map((session) => (
            <tr key={session.id}>
              <td>{session.time}</td>
              <td>{session.training}</td>
              <td>{`${session.participants.length}/${session.capacity}`}</td>
              <td>
                {user && user.bookings.includes(session.id) ? (
                  <button onClick={() => unbookSession(session.id)}>
                    Unbook
                  </button>
                ) : (
                  <button onClick={() => bookSession(session.id)}>Book</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTimeTable;
