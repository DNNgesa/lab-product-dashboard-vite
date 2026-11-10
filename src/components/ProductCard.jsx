import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const cardClassName = `${styles.cardContainer} ${!product.inStock ? 'outOfStockClass' : ''}`;

  return (
    <div className={cardClassName}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <div style={{ marginBottom: '12px' }}>
        {product.inStock ? <span style={{ color: 'green' }}>● In Stock</span> : <span style={{ color: 'red' }}>○ Out of Stock</span>}
      </div>

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
