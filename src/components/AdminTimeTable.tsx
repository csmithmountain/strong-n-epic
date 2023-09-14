// AdminTimeTable.tsx
import React from "react";
import { Workout } from "../types/interface";

interface AdminTimeTableProps {
  trainingData: Workout[];
  onDelete: (sessionToDelete: Workout) => void; // Callback function for delete
}

const AdminTimeTable: React.FC<AdminTimeTableProps> = ({
  trainingData,
  onDelete,
}) => {
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
          {trainingData.map((session) => (
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
              <td className="table-cell">
                {session.participants.length + "/" + session.capacity}
              </td>
              <td className="table-cell">
                <button
                  className="unbook-button"
                  onClick={() => onDelete(session)}
                >
                  Delete
                </button>{" "}
                {/* Call onDelete prop */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTimeTable;
