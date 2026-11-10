import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Conditional Styling: If the product is out of stock, apply the 'outOfStockCard' class for visual indication
  const cardClassName = `${styles.cardContainer} ${!product.inStock ? styles.outOfStockCard : ''}`;

  return (
    <div className={cardClassName}>
      
      <h3>{product.name}</h3>

      <p className={styles.priceTag}>${product.price.toFixed(2)}</p>

      <div style={{ marginTop: '12px' }}>
        {product.inStock ? (
          <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>● In Stock</span>
        ) : (
          <span className={styles.disabledText}>○ Out of Stock</span>
        )}
      </div>
      
    </div>
  );

};

export default ProductCard;
