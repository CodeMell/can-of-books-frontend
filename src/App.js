import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import Welcome from './Welcome';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router className="App">
        <Header />
        <Routes>{/* route with a path of '/about' that renders the `About` component */}
          <Route exact path="/" element={isAuthenticated ? <BestBooks /> : <Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Welcome />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
