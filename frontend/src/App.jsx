import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; 
import Dashboard from './pages/Dashboard';
import Equipment from './Equipment'; 
import Maintenance from './pages/Maintenance'; 
import Reports from './pages/Reports'; // <-- Add this import statement

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} /> {/* <-- Add this route code line */}
      </Routes>
    </Router>
  );
}