Candidate Search Application

A React-based web application that allows employers to search and save potential candidates from GitHub. Users can browse through candidates, save those they are interested in, and view a list of saved candidates. The app uses TypeScript and integrates with the GitHub API to retrieve candidate information.

Table of Contents

	•	Features
	•	Installation
	•	Usage
	•	Technologies Used
	•	License

Features

	•	Search Candidates: View details of random candidates fetched from GitHub, including name, username, location, email, company, and bio.
	•	Save Candidates: Save preferred candidates to a list for further review.
	•	Skip Candidates: Skip candidates that are not a fit and view the next candidate.
	•	View Saved Candidates: Access a list of previously saved candidates and remove candidates from the list.
	•	Persistent Storage: Saves data locally to retain saved candidates across page reloads.

Installation

  1. Clone the repository:
    git clone https://github.com/your-username/candidate-search-app.git
    cd candidate-search-app

  2. Install the dependencies:
    npm install

  3. Create a .env file in the root directory and add your GitHub API token:
    VITE_GITHUB_TOKEN=your_github_token
  
  4. Start the development server:
    npm run dev

  5.	Open your browser and navigate to http://localhost:3000.  

Usage

	1.	Search for Candidates: On the home page, view a random candidate profile from GitHub.
	2.	Save a Candidate: Click the “+” button to save a candidate to the list of potential hires.
	3.	Skip a Candidate: Click the “-” button to skip a candidate and view the next one.
	4.	View Saved Candidates: Navigate to the “Potential Candidates” page to see saved candidates and manage the list.

Technologies Used

	•	React: For building the user interface.
	•	TypeScript: Adds static typing to JavaScript, improving development experience and code quality.
	•	React Router: For client-side routing and navigation.
	•	GitHub API: To fetch candidate data.
	•	Vite: A fast build tool and development server.
	•	CSS: For styling the application.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Replace the placeholders like https://github.com/your-username/candidate-search-app.git with actual details specific to your project. You may also include screenshots or additional sections (such as “Future Improvements” or “Contributing”) if you feel they will add value.