import './App.css'
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

export default App
