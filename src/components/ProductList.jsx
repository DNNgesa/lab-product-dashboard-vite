import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        No products available matching your criteria.
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
          onRemove={onRemove} 
        />
      ))}
    </div>
  );
};

export default ProductList;
