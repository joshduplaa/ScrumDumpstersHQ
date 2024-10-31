import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import base components for entire website
import NavBar from './components/NavBar.jsx';
import './App.css';
//import react pages
import SplashPage from './pages/SplashPage.jsx';


function App() {

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Splash Page is login!
  
  return (
    <Router>
      
      <div className='nav-bar'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      


      </Routes>
    </Router>
  );
}

export default App;
