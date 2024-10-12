// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CandidateSearch from './components/CandidateSearch';
import SavedCandidates from './components/SavedCandidates';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CandidateSearch />} />
          <Route path="saved-candidates" element={<SavedCandidates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);