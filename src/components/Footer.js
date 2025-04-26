import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faPrint} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.jpg';

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Toggle dropdown function for mobile view
  const toggleDropdown = (section) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === section ? null : section);
    }
  };

  return (
    <footer className="main-footer">
      {/* Bouton VOIR CARTE */}
      <div className="map-button" onClick={() => setShowMap(!showMap)}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
        <span>VOIR CARTE</span>
      </div>

      <div className={`map-container ${showMap ? 'visible' : ''}`}>
        <button className="close-map" onClick={() => setShowMap(false)}>
          ×
        </button>
        <iframe
          title="store-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2040.1234567890123!2d10.1234567!3d36.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzI0LjQiTiAxMMKwMDcnNDEuNiJF!5e0!3m2!1sen!2stn!4v1234567890123!5m2!1sen!2stn"
          className="embedded-map"
          allowFullScreen
        />
      </div>

      {/* Contenu principal du footer */}
      <div className="footer-content">
        <div className="footer-section company-section">
          <div className="logo-container">
            <img src={logo} alt="2B Trading" className="footer-logo" />
            <p className="trust-text">You can trust us <span className="arabic-text">تنجم تاثق فينا</span></p>
          </div>
        </div>

        <div className={`footer-section ${activeDropdown === 'society' ? 'active' : ''}`}>
          <h3 onClick={() => toggleDropdown('society')}>NOTRE SOCIÉTÉ</h3>
          <ul>
            <li><a href="#">Horaires de Travail</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Service clients</a></li>
            <li><a href="#">Contactez-nous</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Magasins</a></li>
          </ul>
        </div>

        <div className={`footer-section ${activeDropdown === 'account' ? 'active' : ''}`}>
          <h3 onClick={() => toggleDropdown('account')}>VOTRE COMPTE</h3>
          <ul>
            <li><a href="#">Informations personnelles</a></li>
            <li><a href="#">Commandes</a></li>
            <li><a href="#">Avoirs</a></li>
            <li><a href="#">Adresses</a></li>
            <li><a href="#">Bons de réduction</a></li>
            <li><a href="#">Mes listes de souhaits</a></li>
            <li><a href="#">Mes alertes</a></li>
          </ul>
        </div>

        <div className={`footer-section contact-section ${activeDropdown === 'info' ? 'active' : ''}`}>
          <h3 onClick={() => toggleDropdown('info')}>INFORMATIONS</h3>
          <ul className="company-info">
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 2B Trading</li>
            <li>IMM ELMOEZ B4 SAHLOULI</li>
            <li>4054 SOUSSE</li>
            <li>Tunisie</li>
            <li><FontAwesomeIcon icon={faEnvelope} /><a href='#'>info@2btrading.tn</a></li>
            <li className="numbers">
              <FontAwesomeIcon icon={faPhone} /><a href='#'>73367243-58384693-58384691-58384692-57039970-57039971-51254142</a> 
            </li>
            <li><FontAwesomeIcon icon={faPrint} /><a href='#'>73367243</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom avec boutons d'action */}
      <div className="footer-actions">
        <a 
            href="https://facebook.com" 
            className="facebook-action-btn"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon 
            icon={faFacebookF} 
            className="facebook-action-icon" 
            />
        </a>
      </div>
    </footer>
  );
};

export default Footer;