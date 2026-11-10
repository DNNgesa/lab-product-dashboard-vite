import React from 'react';
import styles from '../styles/ProductCard.module.css';

export const ProductCard = ({ product, name, price, inStock, onRemove }) => {
  const finalName = name || (product && product.name);
  const finalPrice = price || (product && product.price);
  const finalInStock = inStock !== undefined ? inStock : (product && product.inStock);
  const finalId = product && product.id;

  const cardClassName = `${styles.cardContainer || ''} ${!finalInStock ? 'outOfStockClass' : ''}`;

  return (
    <div className={cardClassName} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '6px' }}>
      <h3>{finalName}</h3>
      <p>{finalPrice}</p>

      <div style={{ marginBottom: '12px' }}>
        {finalInStock ? (
          <span style={{ color: 'green', fontWeight: 'bold' }}>● In Stock</span>
        ) : (
          <span style={{ color: 'red', fontWeight: 'bold' }}>○ Out of Stock</span>
        )}
      </div>

      <button 
        onClick={() => onRemove && onRemove(finalId)}
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
};

export default ProductCard;
