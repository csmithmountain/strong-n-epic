import React, { useState } from 'react';
import { User, Workout } from '../types/interface';

interface LoginFormProps {
  userData: User;
  trainingData: Workout[];
}

const TimeTable: React.FC<LoginFormProps> = ({ userData, trainingData }) => {
  const [user, setUser] = useState<User>(userData);

  const bookSession = (sessionId: number) => {
    // Simulate booking a session by updating the user's 'bookings' array
    if (user) {
      const updatedUser = {
        ...user,
        bookings: [...user.bookings, sessionId],
      };
      setUser(updatedUser);
    }
  };

  const unbookSession = (sessionId: number) => {
    // Simulate unbooking a session by updating the user's 'bookings' array
    if(user){
        const updatedUser = {
            ...user,
            bookings: user.bookings.filter(id => id !== sessionId),
        };
        setUser(updatedUser);
    }
  }

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
          {userData &&
            trainingData.map((session) => (
              <tr key={session.id}>
                <td>{session.time}</td>
                <td>{session.training }</td>
                <td>{session.participants.length + "/" +session.capacity}</td>
                <td>
                  {user && user.bookings.includes(session.id) ? (
                    <button onClick={() => unbookSession(session.id)}>Unbook</button>
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
}

export default TimeTable;
