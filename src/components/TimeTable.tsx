import React, { useState, useEffect } from 'react';
import Data from '../api/Data.json';

// Define TypeScript types for your data
interface UserData {
  Users: {
    id: number;
    username: string;
    password: string;
    role: string;
    bookings: number[]; // Array of session IDs
  }[];
  TrainingSessions: {
    id: number;
    training: string;
    tid: string;
    capacity: number;
  }[];
}

function TimeTable() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [user, setUser] = useState<UserData['Users'][0] | null>(null);

  useEffect(() => {
    // Use the imported data directly
    setUserData(Data);
    setUser(Data.Users.find((u) => u.username === 'test') || null);
  }, []);

  const bookSession = (sessionId: number) => {
    // Simulate booking a session by updating the user's 'bookings' array
    if (user) {
      const updatedUser = {
        ...user,
        bookings: [...user.bookings, sessionId],
      };
      setUser(updatedUser);
      // You should also update the server or data source in a real app
    }
  };

  return (
    <div>
      <ul>
        {userData &&
          userData.TrainingSessions.map((session) => (
            <li key={session.id}>
              <span>
                {session.training} on {session.tid}
              </span>
              {user && user.bookings.includes(session.id) ? (
                <span> (Booked)</span>
              ) : (
                <button onClick={() => bookSession(session.id)}>Book</button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TimeTable;
