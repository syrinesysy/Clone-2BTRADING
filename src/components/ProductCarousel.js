import React, { useState, useEffect, useRef } from 'react';
import Product from './Product';
import './ProductCarousel.css';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  
  // Données des produits intégrées directement dans le composant
  const products = [
    {
      id: 1,
      title: "Machine laser 3020 5030 4060 6090 1390 40W-180W",
      image: c1
    },
    {
      id: 2,
      title: "PRODUITS RASPBERRY ORIGINAL",
      image: c2
    },
    {
      id: 3,
      title: "Imprimante 3D Résine Jupiter SE 6K",
      image: c3
    },
    {
      id: 4,
      title: "Kit Arduino Mega 2560 R3",
      image: c4
    }
  ];

  // Fonction pour passer à la slide suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Fonction pour passer à la slide précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Défilement automatique
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  // Calculer les indices des produits visibles
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((currentIndex + i) % products.length);
    }
    return indices;
  };

  const visibleProducts = getVisibleIndices().map(index => products[index]);

  return (
    <div className="carousel-outer-container">
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="carousel-slides">
          {visibleProducts.map((product) => (
            <div key={product.id} className="carousel-slide">
              <Product 
                title={product.title}
                image={product.image}
              />
            </div>
          ))}
        </div>
        
        {/* Flèches de navigation */}
        <button 
          onClick={prevSlide}
          className={`carousel-arrow carousel-arrow-left ${isHovering ? 'visible' : ''}`}
          aria-label="Produit précédent"
        >
          &#10094;
        </button>
        <button 
          onClick={nextSlide}
          className={`carousel-arrow carousel-arrow-right ${isHovering ? 'visible' : ''}`}
          aria-label="Produit suivant"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;