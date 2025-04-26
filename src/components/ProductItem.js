// ProductItem.js
import React from 'react';
import './ProductItem.css';
import { FaEye, FaShoppingCart, FaExchangeAlt, FaHeart } from 'react-icons/fa';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      {product.promo && <span className="promo-tag">Promo!</span>}
      {product.new && <span className="new-tag">Nouveau</span>}

      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="icons-overlay">
          <span className="icon-circle" data-tooltip="Aperçu">
            <FaEye className="icon" />
          </span>
          <span className="icon-circle" data-tooltip="Ajouter au panier">
            <FaShoppingCart className="icon" />
          </span>
          <span className="icon-circle" data-tooltip="Échanger">
            <FaExchangeAlt className="icon" />
          </span>
          <span className="icon-circle" data-tooltip="Favoris">
            <FaHeart className="icon" />
          </span>
        </div>
      </div>
      <div className="product-info">
        <p className="product-brand">{product.brand}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          <span className="current-price">{product.price} TND</span>
          {product.oldPrice && (
            <span className="old-price">{product.oldPrice} TND</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;