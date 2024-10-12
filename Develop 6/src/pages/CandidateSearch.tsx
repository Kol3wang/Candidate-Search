// import { useState, useEffect } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
// import { Candidate } from '../interfaces/Candidate.interface';

// const CandidateSearch = () => {
//   const [candidate, setCandidate] = useState<Candidate | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Log the GitHub token to ensure it's being loaded
//     console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);
//     fetchCandidate();
//   }, []);

//   const fetchCandidate = async () => {
//     try {
//       const users = await searchGithub(); // Get a list of random users
//       console.log('Users:', users); // Check if users data is received
//       if (users.length > 0) {
//         const randomUser = users[Math.floor(Math.random() * users.length)];
//         const candidateData = await searchGithubUser(randomUser.login);
//         console.log('Candidate Data:', candidateData); // Check candidate data
//         setCandidate(candidateData);
//         setError(null);
//       } else {
//         setError('No users found, please try again.');
//       }
//     } catch (err) {
//       console.error('Fetch error:', err); // Log error details
//       setError('Unable to fetch candidate data. Please try again.');
//     }
//   };

//   const saveCandidate = () => {
//     if (candidate) {
//       const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
//       localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
//       fetchCandidate();
//     }
//   };

//   const skipCandidate = () => {
//     fetchCandidate();
//   };

//   return (
//     <div className="candidate-container">
//       {error ? (
//         <p>{error}</p>
//       ) : candidate ? (
//         <>
//           <img src={candidate.avatar_url} alt={candidate.name} className="candidate-avatar" />
//           <h2>{candidate.name} ({candidate.username})</h2>
//           <p>Location: {candidate.location}</p>
//           <p>Email: {candidate.email}</p>
//           <p>Company: {candidate.company}</p>
//           <p>{candidate.bio}</p>
//           <div className="buttons">
//             <button onClick={skipCandidate} className="skip-button">-</button>
//             <button onClick={saveCandidate} className="save-button">+</button>
//           </div>
//         </>
//       ) : (
//         <p>Loading candidate data...</p>
//       )}
//     </div>
//   );
// };

// export default CandidateSearch;
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import AvatarComponent from '../components/Avatar';
import CandidateInfoComponent from '../components/CandidateInfo';
import ButtonGroupComponent from '../components/ButtonGroup';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check that the GitHub token is correctly loaded from environment variables
    console.log('Environment Variables:', import.meta.env); // Log all environment variables
    console.log('GitHub Token:', import.meta.env.VITE_GITHUB_TOKEN);
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    try {
      const users = await searchGithub();
      console.log('Users:', users);

      if (users.length > 0) {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const candidateData = await searchGithubUser(randomUser.login);
        console.log('Candidate Data:', candidateData);
        
        setCandidate(candidateData);
        setError(null);
      } else {
        setError('No users found, please try again.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Unable to fetch candidate data. Please check your network connection.');
    }
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