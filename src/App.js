import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Home from './pages/Home';
import FloatingSocial from './components/FloatingSocial';
import StickyBar from './components/StickyBar';
import ProductPopup from './components/ProductPopup';
import logo from './images/logo.jpg';
import './App.css';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement du contenu
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Ajustez la durée selon vos besoins
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="logo-container">
          <img src={logo} alt="2B Trading" width="180" />
        </div>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <FloatingSocial />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <StickyBar />
        <ProductPopup />
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}


export default App;