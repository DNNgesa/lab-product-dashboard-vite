import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const initialProducts = [
    { id: 1, name: "Vanguard Wireless Headphones", price: 89.99, inStock: true },
    { id: 2, name: "EcoStream Smart Water Bottle", price: 24.50, inStock: false },
    { id: 3, name: "Quantum Mechanix Keyboard", price: 120.00, inStock: true },
    { id: 4, name: "AuraGlow RGB Desk Mat", price: 19.99, inStock: true },
    { id: 5, name: "Apex Grip Ergonomic Mouse", price: 45.00, inStock: false }
  ];

  const [filterMode, setFilterMode] = useState('all');

  const filteredProducts = initialProducts.filter(product => {
    if (filterMode === 'available') return product.inStock;
    if (filterMode === 'outOfStock') return !product.inStock;
    return true; 
  });

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1976d2' }}>Product Dashboard</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
        <button 
          onClick={() => setFilterMode('all')}
          style={{
            padding: '8px 16px',
            backgroundColor: filterMode === 'all' ? '#1976d2' : '#f5f5f5',
            color: filterMode === 'all' ? '#fff' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          All Products
        </button>
        <button 
          onClick={() => setFilterMode('available')}
          style={{
            padding: '8px 16px',
            backgroundColor: filterMode === 'available' ? '#2e7d32' : '#f5f5f5',
            color: filterMode === 'available' ? '#fff' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          In Stock
        </button>
        <button 
          onClick={() => setFilterMode('outOfStock')}
          style={{
            padding: '8px 16px',
            backgroundColor: filterMode === 'outOfStock' ? '#d32f2f' : '#f5f5f5',
            color: filterMode === 'outOfStock' ? '#fff' : '#333',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Out of Stock
        </button>
      </div>

      <ProductList products={filteredProducts} />
      
    </div>
  );
};

export default App;
