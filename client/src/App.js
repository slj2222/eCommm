// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MensClothing from './components/MensClothing';
import WomensClothing from './components/WomensClothing';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage /> }/>
            <Route path="/men's-clothing" element={<MensClothing />} />
            <Route path="/women's-clothing" element={<WomensClothing />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/electronics" element={<Electronics />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
