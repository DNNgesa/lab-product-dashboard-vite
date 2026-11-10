import React from 'react';
import ProductCard from './ProductCard';

export const ProductList = ({ products, onRemove }) => {
  if (!products || products.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No products available matching your criteria.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
      {products.map((singleProduct) => (
        <ProductCard 
          key={singleProduct.id}
          id={singleProduct.id}
          name={singleProduct.name}
          price={singleProduct.price}
          inStock={singleProduct.inStock}
          product={singleProduct} // Backwards compatibility match
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default ProductList;
