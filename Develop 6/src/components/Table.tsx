import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface TableProps {
  candidates: Candidate[];
  onRemove: (username: string) => void;
}

const TableComponent: React.FC<TableProps> = ({ candidates, onRemove }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map(candidate => (
          <tr key={candidate.username}>
            <td>
              <img src={candidate.avatar_url} alt={candidate.name} className="saved-avatar" />
            </td>
            <td>
              {candidate.name} <br />
              <small>({candidate.username})</small>
            </td>
            <td>{candidate.location}</td>
            <td>{candidate.email}</td>
            <td>{candidate.company}</td>
            <td>{candidate.bio}</td>
            <td>
              <button onClick={() => onRemove(candidate.username)} className="reject-button">-</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;