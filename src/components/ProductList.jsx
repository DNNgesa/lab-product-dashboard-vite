import React from 'react';
import ProductCard from './ProductCard'; 

function ProductList({ products, onRemove }) {
  if (!products || products.length === 0) {
    return <div style={{ textAlign: 'center', color: '#666' }}>No products available.</div>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
      {products.map((singleProduct) => (
        <ProductCard 
          key={singleProduct.id}
          product={singleProduct}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default ProductList; 
