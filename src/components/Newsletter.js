import React from 'react';
import './Newsletter.css'; // We'll reuse the same CSS file

const Newsletter = () => {
    return (
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>NOTRE NEWSLETTER</h2>
          <p>Recevez les dernières nouvelles et offres</p>
          <div className="input-container">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              <span>S'ABONNER</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Newsletter;