import React from 'react';
import ProductSection from './ProductSection';
import './ProductSectionsContainer.css';
import s1 from '../images/s1.jpg'
import s2 from '../images/s2.jpg'
const ProductSectionsContainer = () => {
  return (
    <div className="product-sections-container">
      <div className="product-sections-wrapper">
        <ProductSection 
          title={<>{/* Ajout du saut de ligne ici */}
            Nouveaux<br />Produits
          </>} 
          imageUrl={s1}
        />
        <ProductSection 
          title={<>{/* Ajout du saut de ligne ici */}
          Nos<br />Promotions
        </>} 
        imageUrl={s1}
        />
      </div>
    </div>
  );
};

export default ProductSectionsContainer;