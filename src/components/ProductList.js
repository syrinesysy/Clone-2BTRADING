import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ title, products }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </section>
);
export default ProductList;