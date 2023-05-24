import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header className="App"/>
        <Routes>
          <Route exact path="/" element={<BestBooks />} />
          {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

