
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../Component/login';
import VerificationPage from '../Component/VerificationPage';
import NavbarPage from '../Component/Navbar';
import Dashboard from '../Component/Dashboard';
import Settings from '../Component/Settings';
import TransferPage from '../Component/TransferPage';
import Transactions from '../Component/Transaction';
import Investment from '../Component/Investment';
import AccountsAndCards from '../Component/AccountsAndCards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verify" element={<VerificationPage />} />       
        <Route element={<NavbarPage />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/transactions" element={<Transactions />} />
          { <Route path="/AccountsAndCards" element={<AccountsAndCards />} /> }
          <Route path="/Investment" element={<Investment />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

