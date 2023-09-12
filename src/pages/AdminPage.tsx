import React from "react";
import LogoutButton from "../components/LogoutButton";
import AddTimeForm from "../components/AddTimeForm";
import Data from '../api/Data.json';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

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
    booked: number[];
  }[];
}

const AdminPage: React.FC = () => {
  function TimeTable() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [user, setUser] = useState<UserData['Users'][0] | null>(null);
    const location = useLocation();

    useEffect(() => {
      // Use the imported data directly
      setUser(location.state?.user);
      setUserData(Data);
    }, [location.state]);

     const deleteSession = (sessionId: number) => {
    // Simulate deleting a session by removing it from the training sessions data
    if (userData) {
      const updatedTrainingSessions = userData.TrainingSessions.filter(
        (session) => session.id !== sessionId
      );
      setUserData({
        ...userData,
        TrainingSessions: updatedTrainingSessions,
      });
    }
  };

    // Return the TimeTable component
    return (
      <>
        <LogoutButton />
        <AddTimeForm />
        <div>
          <h2>Training Sessions</h2>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Training</th>
                <th>Capacity</th>
                <th>Delete</th> 
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.TrainingSessions.map((session) => (
                  <tr key={session.id}>
                    <td>{session.tid}</td>
                    <td>{session.training}</td>
                    <td>{session.booked.length + "/" + session.capacity}</td>
                    <td>
                      <button onClick={() => deleteSession(session.id)}></button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <TimeTable />;
};

export default AdminPage;
