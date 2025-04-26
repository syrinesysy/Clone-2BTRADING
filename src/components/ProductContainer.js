// ProductContainer.js
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './ProductContainer.css';
import e1 from '../images/e1.jpg';
import e2 from '../images/e2.jpg';
import e3 from '../images/e3.jpg';
import e4 from '../images/e4.jpg';
import e5 from '../images/e5.jpg';
import e6 from '../images/e6.jpg';
import e7 from '../images/e7.jpg';
import e8 from '../images/e8.jpg';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import f8 from '../images/f8.jpg';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';
import h7 from '../images/h7.jpg';
import h8 from '../images/h8.jpg';

function ProductContainer() {
  const [activeTab, setActiveTab] = useState('featured');
  const [currentPage, setCurrentPage] = useState({
    featured: 0,
    new: 0,
    bestsellers: 0,
  });

  // Définition des produits pour chaque catégorie
  const products = {
    featured: [
      { id: 1, name: 'KIT DIODES LED 5MM (500pc)', price: '41.950', oldPrice: '45.000', image: e1, promo: true, brand: 'ACCDIS' },
      { id: 2, name: 'Voyant Lumineux Industrial Signalisation LED Pilot', price: '15.000', image: e2, brand: 'ACCDIS' },
      { id: 3, name: 'Foret HSS CNC diamètre de tige 3.175mm', price: '10.000', image: e3, brand: 'ACCDIS' },
      { id: 4, name: 'Adapteur LCD JX8P embed Controller board JOYSTOCK', price: '93.000', oldPrice: '100.000', image: e4, brand: 'ACCDIS' },
      { id: 5, name: 'MICRO MOTEUR VIBRATION', price: '15.000', image: e5, brand: 'ACCDIS' },
      { id: 6, name: 'Adaptateur 1 male à 1RX femelle', price: '15.000', image: e6, brand: 'ACCDIS' },
      { id: 7, name: 'Cable d\'extension N male vers N femelle', price: '35.000', image: e7, brand: 'ACCDIS' },
      { id: 8, name: 'Mini pompe à air 370A 12V', price: '16.500', image: e8, brand: 'ACCDIS' },
      { id: 25, name: 'Cable d\'extension N male vers N femelle', price: '35.000', image: e7, brand: 'ACCDIS' },
      { id: 26, name: 'Mini pompe à air 370A 12V', price: '16.500', image: e8, brand: 'ACCDIS' },
      
    ],
    new: [
      // Produits pour l'onglet "Nouveaux Produits"
      { id: 9, name: 'Nouveau Produit 1', price: '25.000', image: f1,new: true, brand: 'ACCDIS' },
      { id: 10, name: 'Nouveau Produit 2', price: '30.000', image: f2,new: true, brand: 'ACCDIS' },
      { id: 11, name: 'Nouveau Produit 2', price: '30.000', image: f3,new: true, brand: 'ACCDIS' },
      { id: 12, name: 'Nouveau Produit 2', price: '30.000', image: f4,new: true, brand: 'ACCDIS' },
      { id: 13, name: 'Nouveau Produit 2', price: '30.000', image: f5,new: true, brand: 'ACCDIS' },
      { id: 14, name: 'Nouveau Produit 2', price: '30.000', image: f6,new: true, brand: 'ACCDIS' },
      { id: 15, name: 'Nouveau Produit 2', price: '30.000', image: f7,new: true, brand: 'ACCDIS' },
      { id: 16, name: 'Nouveau Produit 2', price: '30.000', image: f8,new: true, brand: 'ACCDIS' },
    ],
    bestsellers: [
      // Produits pour l'onglet "Produits Les Plus Vendus"
      { id: 17, name: 'Produit Populaire 1', price: '22.000', image: h1, brand: 'ACCDIS' },
      { id: 18, name: 'Produit Populaire 2', price: '33.000', image: h2, brand: 'ACCDIS' },
      { id: 19, name: 'Nouveau Produit 1', price: '25.000', image: h3, brand: 'ACCDIS' },
      { id: 20, name: 'Nouveau Produit 2', price: '30.000', image: h4, brand: 'ACCDIS' },
      { id: 21, name: 'Nouveau Produit 2', price: '30.000', image: h5, brand: 'ACCDIS' },
      { id: 22, name: 'Nouveau Produit 2', price: '30.000', image: h6, brand: 'ACCDIS' },
      { id: 23, name: 'Nouveau Produit 2', price: '30.000', image: h7, brand: 'ACCDIS' },
      { id: 24, name: 'Nouveau Produit 2', price: '30.000', image: h8, brand: 'ACCDIS' },
    ]
  };
  const itemsPerPage = 8;
  const step = 4; // Déplacement de 4 éléments à chaque clic

  // Calcul des produits à afficher
  const getCurrentProducts = (tab) => {
    const productsList = products[tab];
    const start = Math.min(currentPage[tab] * step, Math.max(0, productsList.length - itemsPerPage));
    const end = start + itemsPerPage;
    return productsList.slice(start, end);
  };

  // Calcul du nombre total de pages
  const getTotalPages = (tab) => {
    const totalItems = products[tab].length;
    if (totalItems <= itemsPerPage) return 1;
    return Math.ceil((totalItems - itemsPerPage) / step) + 1;
  };

  // Gestion des onglets
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleNavigation = (direction) => {
    setCurrentPage(prev => {
      const total = getTotalPages(activeTab);
      const newPage = Math.max(0, Math.min(prev[activeTab] + direction, total - 1));
      return { ...prev, [activeTab]: newPage };
    });
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h3 className="section-subtitle">TOP MARQUES</h3>
        <h2 className="section-title">PRODUIT TENDANCE</h2>
        <div className="blue-line"></div>
      </div>

      <div className="tab-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'featured' ? 'active' : ''}`} 
            onClick={() => handleTabChange('featured')}
          >
            Produits Phares
          </button>
          <button 
            className={`tab ${activeTab === 'new' ? 'active' : ''}`} 
            onClick={() => handleTabChange('new')}
          >
            Nouveaux Produits
          </button>
          <button 
            className={`tab ${activeTab === 'bestsellers' ? 'active' : ''}`} 
            onClick={() => handleTabChange('bestsellers')}
          >
            Plus Vendus
          </button>
        </div>
        
        <div className="nav-buttons">
          <button 
            className="nav-button"
            onClick={() => handleNavigation(-1)}
            disabled={currentPage[activeTab] === 0}
          >
            &lt;
          </button>
          <button 
            className="nav-button"
            onClick={() => handleNavigation(1)}
            disabled={currentPage[activeTab] === getTotalPages(activeTab) - 1}
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="product-grid">
        {getCurrentProducts(activeTab).map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;