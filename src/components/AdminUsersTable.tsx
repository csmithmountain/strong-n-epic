import { Workout } from "../types/interface";

interface AdminUsersTableProps {
  trainingData: Workout[];
}

const AdminUsersTable: React.FC<AdminUsersTableProps> = ({ trainingData }) => {
  return (
    <div>
      <h2>Training Sessions</h2>
      <table className="table-view">
        <thead>
          <tr>
            <th>Time</th>
            <th>Training</th>
            <th>Participants</th>
          </tr>
        </thead>
        <tbody>
          {trainingData.map((session) => (
            <tr key={session.id}>
              <td>{session.time}</td>
              <td>{session.training}</td>
              <td>
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
