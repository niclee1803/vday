import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CardPage from './CardPage';

function MainComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card');
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="valentines">
        <div className="envelope">
          <div className="card">
            <div className="text">
              <br />For <br /> Clarice
            </div>
            <div className="heart"></div>
          </div>
        </div>
        <div className="front"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;