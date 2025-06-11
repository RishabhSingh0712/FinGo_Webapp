import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../Component/login';
import VerificationPage from '../Component/VerificationPage';
import NavbarPage from '../Component/Navbar';
import Dashboard from '../Component/Dashboard';
import Settings from '../Component/Settings';
import TransferPage from '../Component/TransferPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/dashboard" element={<NavbarPage />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="TransferPage" element={<TransferPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;