import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import ProductColumnsContainer from '../components/ProductColumnsContainer';
import ProductContainer from '../components/ProductContainer';
import ProductSectionsContainer from '../components/ProductSectionsContainer';
const Home = () => {

  return (
  <div>

    <div>
      <ProductCarousel />
    </div>
    <div>
      <ProductSectionsContainer />
    </div>
    <div>
       <ProductContainer />
    </div>
    <div>
      <ProductColumnsContainer />
    </div>
  </div>
  );
};
export default Home;