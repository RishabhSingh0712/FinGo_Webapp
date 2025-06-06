import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../Component/login';
import VerificationPage from '../Component/VerificationPage';
import DashboardPage from '../Component/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verify" element={<VerificationPage />} />
        {/* <Route path="/" element={<VerificationPage />} /> */}
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;




