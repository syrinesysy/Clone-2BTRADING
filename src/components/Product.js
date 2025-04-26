import React from 'react';
import './Product.css';

const Product = ({ image, title }) => {
  return (
    <div className="prod-card">
      <div className="image-container">
        <img 
          src={image} 
          alt={title} 
          className="prod" 
        />
        <div className="content-overlay">
          <h3 className="prod-title">{title}</h3>
          <button className="prod-button">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;