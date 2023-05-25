
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/LoginForm';
import Register from './components/RegistrationForm';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />t
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
