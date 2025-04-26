import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import './FloatingSocial.css';
import captcha from '../images/captcha.jpg'

const FloatingSocial = () => {
  return (
    <div className="floating-social-container">
      {/* Facebook Button */}
      <a 
        href="https://facebook.com/yourpage" 
        className="social-button facebook-button"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit our Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/+21612345678" 
        className="social-button whatsapp-button"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us via WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      
      {/* reCAPTCHA Button */}
      <a 
        href="#"
        className="social-button recaptcha-button"
        aria-label="reCAPTCHA information"
        onClick={(e) => e.preventDefault()}
      >
        <img 
          src= {captcha}
          alt="reCAPTCHA" 
          className="recaptcha-logo"
        />
        <span className="recaptcha-text">protection par reCAPTCHA</span>
      </a>
    </div>
  );
};

export default FloatingSocial;