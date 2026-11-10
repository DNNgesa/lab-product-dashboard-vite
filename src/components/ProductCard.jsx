import React from 'react';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product, onRemove }) {
  const cardClassName = `${styles.cardContainer || ''} ${!product.inStock ? 'outOfStockClass' : ''}`;

  return (
    <div className={cardClassName} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '6px' }}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <div style={{ marginBottom: '12px' }}>
        {product.inStock ? (
          <span style={{ color: 'green', fontWeight: 'bold' }}>● In Stock</span>
        ) : (
          <span style={{ color: 'red', fontWeight: 'bold' }}>○ Out of Stock</span>
        )}
      </div>

      <button 
        onClick={() => onRemove && onRemove(product.id)}
        style={{
          width: '100%',
          padding: '6px',
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ProductCard; 
