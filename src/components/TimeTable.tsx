import React, { useState, useEffect } from 'react';
import Data from '../api/Data.json';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  

  useEffect(() => {
    // Use the imported data directly
    setUser(location.state?.user);
    setUserData(Data);
  }, []);

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
      <ul>
        {userData &&
          userData.TrainingSessions.map((session) => (
            <li key={session.id}>
              <span>
                {session.training} on {session.tid}
              </span>
              {user && user.bookings.includes(session.id) ? (
                <button onClick={() => unbookSession(session.id)}>Unbook</button>
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
