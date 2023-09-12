// AdminTimeTable.tsx
import React from 'react';
import { Workout } from '../types/interface';


interface AdminTimeTableProps {
  trainingData: Workout[];
  onDelete: (sessionToDelete: Workout) => void; // Callback function for delete
}

const AdminTimeTable: React.FC<AdminTimeTableProps> = ({ trainingData, onDelete }) => {
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
          {trainingData.map((session) => (
            <tr key={session.id}>
              <td>{session.time}</td>
              <td>{session.training}</td>
              <td>{session.participants.length + "/" + session.capacity}</td>
              <td>
                <button onClick={() => onDelete(session)}>Delete</button> {/* Call onDelete prop */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTimeTable;

