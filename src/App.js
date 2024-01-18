import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/Attandance.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Homework.jsx';




const App = () => {

  return (

    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;