import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import AvatarComponent from '../components/Avatar';
import CandidateInfoComponent from '../components/CandidateInfo';
import ButtonGroupComponent from '../components/ButtonGroup';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [noMoreCandidates, setNoMoreCandidates] = useState<boolean>(false);

  useEffect(() => {
    console.log('Environment Variables:', import.meta.env);
    console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    try {
      const users = await searchGithub();
      if (users.length > 0) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const candidateData = await searchGithubUser(randomUser.login);
        setCandidate(candidateData);
        setError(null);
        setNoMoreCandidates(false);
      } else {
        handleNoMoreCandidates();
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Unable to fetch candidate data. Please check your network connection.');
    }
  };

  const handleNoMoreCandidates = () => {
    setCandidate(null);
    setNoMoreCandidates(true);
  };

  const saveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      fetchCandidate();
    }
  };

  const skipCandidate = () => {
    fetchCandidate();
  };

  return (
    <div className="candidate-container">
      {error ? (
        <p>{error}</p>
      ) : noMoreCandidates ? (
        <p>No more candidates available.</p>
      ) : candidate ? (
        <>
          <AvatarComponent src={candidate.avatar_url} alt={candidate.name || 'Candidate Avatar'} />
          <CandidateInfoComponent candidate={candidate} />
          <ButtonGroupComponent onSave={saveCandidate} onSkip={skipCandidate} />
        </>
      ) : (
        <p>Loading candidate data...</p>
      )}
    </div>
  );
};

export default CandidateSearch;