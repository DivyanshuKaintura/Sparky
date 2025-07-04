/*import './App.css'
import { Router, Route, Routes } from 'react-router-dom';
// import Test from './pages/test';
import Community from './pages/community';
import Register from './pages/register';
import Home from './pages/home.jsx';
import Login from './pages/login';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default <App></App>
*/

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import AdminDashboard from "./pages/adminDashboard";
import FarmerDashboard from "./pages/farmerDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      </Routes>
    </>
  );
}

export default App;


