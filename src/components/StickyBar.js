// StickyBar.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUser,
  faHeart,
  faExchangeAlt,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import './StickyBar.css';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    const stickyBar = document.querySelector('.sticky-bar');
    const footer = document.querySelector('.main-footer');
    const headerTop = document.querySelector('.header-top');
    
    const handleScroll = () => {
      if (!stickyBar || !footer || !headerTop) return;
      
      // Show only when scrolled past header
      if (window.scrollY > headerTop.offsetHeight) {
        setIsVisible(true);
        stickyBar.classList.add('visible');
        
        // Only adjust footer margin in desktop mode
        if (!isMobile) {
          const stickyBarHeight = stickyBar.offsetHeight;
          const footerTop = footer.getBoundingClientRect().top + window.scrollY;
          const scrollPosition = window.scrollY + window.innerHeight;
          
          // If we've reached the footer, push the footer down to keep bar visible
          if (scrollPosition > footerTop) {
            footer.style.marginTop = `${stickyBarHeight}px`;
          } else {
            footer.style.marginTop = '0';
          }
        }
      } else {
        setIsVisible(false);
        stickyBar.classList.remove('visible');
        footer.style.marginTop = '0';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      // Reset footer margin if component unmounts
      if (footer) {
        footer.style.marginTop = '0';
      }
    };
  }, [isMobile]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`sticky-bar ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-bar-container">
        {/* These buttons only show in desktop mode */}
        <button className="action-btn cart-btn desktop-only">
          <FontAwesomeIcon icon={faShoppingCart} /> Ajouter au panier
        </button>
        
        <button className="action-btn account-btn desktop-only">
          <FontAwesomeIcon icon={faUser} /> Mon compte
        </button>
        
        <button className="action-btn wishlist-btn desktop-only">
          <span className="count">(0)</span> <FontAwesomeIcon icon={faHeart} /> Liste de souhaits
        </button>
        
        <button className="action-btn compare-btn desktop-only">
          <span className="count">(0)</span> <FontAwesomeIcon icon={faExchangeAlt} /> Comparer
        </button>
        
        {/* This button appears in both modes, but styled differently */}
        <button className="action-btn scroll-btn" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
          <span className="scroll-text desktop-only">Faites défiler vers le haut</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBar;