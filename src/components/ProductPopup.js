import React, { useState, useEffect } from 'react';
import './ProductPopup.css';
import c1 from '../images/c1.jpg';
import a1 from '../images/a1.jpg';
import b1 from '../images/b1.jpg';

const ProductPopup = () => {
  const products = [
    {
      id: 1,
      title: "A316.I - Optocoupleur - Boitier CMS",
      price: "12,000 TND",
      image: c1,
      isNew: true
    },
    {
      id: 2,
      title: "B205.X - Microcontroller",
      price: "18,500 TND",
      image: a1,
      isNew: true
    },
    {
      id: 3,
      title: "R470 - Resistance 470Ω",
      price: "500 TND",
      image: b1,
      isNew: false
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
        setIsChanging(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [visible, products.length]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  const currentProduct = products[currentIndex];

  return (
    <div className={`product-popup ${isChanging ? 'changing' : ''}`}>
      <button className="close-button" onClick={handleClose}>×</button>
      <div className="popup-content">
        {currentProduct.isNew && <div className="new-badge">New</div>}
        <div className="product-image">
          <img src={currentProduct.image} alt={currentProduct.title} />
        </div>
        <div className="product-details">
          <h4 className="product-title">{currentProduct.title}</h4>
          <p className="product-price">{currentProduct.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;