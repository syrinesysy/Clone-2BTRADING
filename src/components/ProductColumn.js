import React, { useState, useEffect, useRef } from 'react';
import './ProductColumn.css';

const ProductItem = ({ image, title, price, oldPrice }) => {
  return (
    <div className="p-item">
      <div className="p-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="p-info">
        <h3 className="p-title">{title}</h3>
        <div className="p-price">
          <span className="current-price">{price} TND</span>
          {oldPrice && <span className="old-price">{oldPrice} TND</span>}
        </div>
      </div>
    </div>
  );
};

const ProductColumn = ({ title, products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const productsPerPage = 2;

  useEffect(() => {
    // Calculer le nombre total de pages
    setTotalPages(Math.ceil(products.length / productsPerPage));
  }, [products]);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Obtenir les produits pour la page actuelle
  const getCurrentProducts = () => {
    const startIndex = currentPage * productsPerPage;
    return products.slice(startIndex, startIndex + productsPerPage);
  };

  return (
    <div className="p-column">
      <div className="column-header">
        <h2 className="column-title">{title}</h2>
        <div className="column-navigation">
          <button 
            onClick={prevPage}
            className="nav-button prev"
            aria-label="Page précédente"
          >
            &#10094;
          </button>
          <button 
            onClick={nextPage}
            className="nav-button next"
            aria-label="Page suivante"
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="column-products">
        {getCurrentProducts().map((product) => (
          <ProductItem 
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColumn;