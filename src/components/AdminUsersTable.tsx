import { Workout } from "../types/interface";

interface AdminUsersTableProps {
  trainingData: Workout[];
}

const AdminUsersTable: React.FC<AdminUsersTableProps> = ({ trainingData }) => {
  return (
    <div className="table-container">
      <h2>Training Sessions</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th className="table-header">Time</th>
            <th className="table-header">Training</th>
            <th className="table-header participants-column">Participants</th>
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
              <td className="table-cell participants-column">
                {session.participants.length === 0
                  ? "None"
                  : session.participants.join(" ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminUsersTable;
