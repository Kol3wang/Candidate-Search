import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateInfoProps {
  candidate: Candidate;
}

const CandidateInfoComponent: React.FC<CandidateInfoProps> = ({ candidate }) => {
  return (
    <div className="candidate-info">
      <h2>{candidate.name} ({candidate.username})</h2>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <p>{candidate.bio}</p>
    </div>
  );
};

export default CandidateInfoComponent;