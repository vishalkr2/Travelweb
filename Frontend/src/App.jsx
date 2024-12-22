import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Location from './Components/Location';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;