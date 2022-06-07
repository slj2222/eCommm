// import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from "react";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MensClothing from './components/MensClothing';
import WomensClothing from './components/WomensClothing';
import Electronics from './components/Electronics';
import Jewelery from './components/Jewelery';
import Footer from './components/Footer';
import DetailItemCard from './components/DetailItemCard';


function App() {
  const [allItems, setAllItems] = useState([])
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setAllItems(data))
  }, [])


  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage allItems={allItems}/>} />
          <Route path="/men's-clothing" element={<MensClothing allItems={allItems}/>} />
          <Route path="/women's-clothing" element={<WomensClothing allItems={allItems}/>} />
          <Route path="/jewelery" element={<Jewelery allItems={allItems} />} />
          <Route path="/electronics" element={<Electronics allItems={allItems}/>} />
          <Route path="/products/:id" element={<DetailItemCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
