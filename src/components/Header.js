// Header.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faSearch,
  faBars,
  faChevronDown,
  faTimes,
  faPhone,
  faHeart,
  faExchangeAlt
} from '@fortawesome/free-solid-svg-icons';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile && window.scrollY > 120) {
        setIsScrolled(true);
      } else if (isMobile && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when sidebar is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Different dropdown contents for each menu item
  const dropdowns = [
    { 
      name: 'ELECTRONIQUE', 
      badge: null, 
      hasDropdown: true,
      items: ['CARTES DE DEVELOPPEMENT', 'ROBOTIQUE', 'KITS', 'AFFICHEURS-LED-LCD', 'ENERGIES RENOUVELABLES', 'ACCESSOIRES VELO EBIKE', 'AUTRES', 'CIRCUIT IMPRIME-OUTILLAGE', 'CONNECTIQUES', 'CAPTEURS', 'MOTEUR-SERVO-POMPE', 'SMART HOME']
    },
    { 
      name: 'CNC-3D-GRAVURE', 
      badge: 'NEW', 
      hasDropdown: true,
      items: ['Filament-Resine', 'Machines', 'Scanner 3D']
    },
    { 
      name: 'COMPOSANTS', 
      badge: 'HOT', 
      hasDropdown: true,
      items: ['Résistances', 'Condensateurs', 'Transistors', 'LEDs', 'Circuits intégrés']
    },
    { 
      name: 'SCIENCES', 
      badge: null, 
      hasDropdown: true,
      items: ['BIOLOGIE-CHIMIE', 'PHYSIQUE']
    },
    { 
      name: 'TEST-MESURE-REPARATION', 
      badge: null, 
      hasDropdown: false,
      items: []
    }
  ];

  return (
    <header className="header">
      {/* Bande noire avec texte en blanc */}
      <div className="top-black-banner">
        <div className="banner-content">
        Votre destination d'achat en ligne la plus rapide en Tunisie
        </div>
      </div>
      
      <div className={`header-top ${isScrolled ? 'fixed-header' : ''}`}>
        <div className="header-main">
          <div className="mobile-menu-container">
            <FontAwesomeIcon
              icon={faBars}
              className="mobile-menu-icon"
              onClick={toggleMobileMenu}
            />
          </div>
          
          <img src={logo} alt="2B TRADING" className="logo" />
          
          <div className="user-section">
  <div className="user-dropdown-container">
    <FontAwesomeIcon icon={faUser} className="user-icon" />
    <div className="user-dropdown">
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faUser} className="dropdown-icon" />
        <span>Connexion</span>
      </div>
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faHeart} className="dropdown-icon" />
        <span>liste de souhaits (0)</span>
      </div>
      <div className="dropdown-item">
        <FontAwesomeIcon icon={faExchangeAlt} className="dropdown-icon" />
        <span>comparer (0)</span>
      </div>
    </div>
  </div>
  <div className="cart-wrapper">
    <div className="cart-badge">0</div>
    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
  </div>
</div>
        </div>
        
        {/* Barre de recherche visible seulement si non scrollé en mode mobile */}
        <div className={`search-container ${isScrolled && isMobile ? 'hidden' : ''}`}>
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="ex : arduino, raspberry, diode, ..." 
              className="search-input" 
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </div>

      {/* Header bottom fixe uniquement en mode desktop */}
      {!isMobile && (
        <div className={`header-bottom ${isScrolled ? 'fixed-header' : ''}`}>
          <div className="nav-main">
            <div className="nav-section">
              <FontAwesomeIcon icon={faHome} className="home-icon" />
              
              {dropdowns.map((item, index) => (
                <div key={index} className="nav-item">
                  <div className="nav-label">
                    {item.name}
                    {item.badge && (
                      <span className={`item-badge ${item.badge.toLowerCase()}`}>
                        {item.badge}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
                    )}
                  </div>
                  {item.hasDropdown && (
                    <div className="dropdown-content">
                      {item.items.map((subItem, subIndex) => (
                        <div key={subIndex} className="dropdown-item">{subItem}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-wrapper">
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              <div className="phone-numbers">
                <span>73367243-58384693-58384691-<br />58384692-57039970-57039971-<br />51254142</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu latéral pour mobile, semblable à celui de la photo */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">Mega Menu</div>
          <FontAwesomeIcon 
            icon={faTimes} 
            className="close-menu-icon" 
            onClick={closeMenu} 
          />
        </div>
        
        <div className="sidebar-menu">
          {dropdowns.map((item, index) => (
            <div key={index} className="sidebar-item">
              <div className="sidebar-item-header">
                {item.name}
                {item.badge && (
                  <span className={`item-badge ${item.badge.toLowerCase()}`}>
                    {item.badge}
                  </span>
                )}
                {item.hasDropdown && (
                  <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
                )}
              </div>
              {item.hasDropdown && (
                <div className="sidebar-dropdown">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="sidebar-dropdown-item">{subItem}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="sidebar-contact">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <div className="phone-numbers">
            <span>73367243-58384693-<br />58384691-58384692-<br />57039970-57039971-<br />51254142</span>
          </div>
        </div>
      </div>

      {/* Overlay pour fermer le menu latéral */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;