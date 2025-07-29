import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Pages/Home';
import About from './pages/About';
import Technician from './pages/Technician';
import Contact from './pages/Contact';
import Login from './Pages/Auth/login';
import Technician_Registration from './Pages/Auth/Technician-Registration';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/tech-registration" element={<Technician_Registration />} />
      </Routes>
    </Router>
  );
}
