import React from 'react';
import './ProductSection.css';

const ProductSection = ({ title, imageUrl }) => {
  return (
    <div className="product-section">
      <div className="product-section-content">
        <h2 className="product-section-title">{title}</h2>
        <div className="product-section-image-container">
        <a href="#">
        <img 
          src={imageUrl || "/api/placeholder/400/320"} 
          alt={title} 
          className="product-section-image"
        />
      </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;