import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
        <p>No products available matching your criteria.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
      gap: '20px',
      padding: '20px 0'
    }}>
      {products.map((singleProduct) => (
        <ProductCard 
          key={singleProduct.id} 
          product={singleProduct} 
        />
      ))}
    </div>
  );
};

export default ProductList;
