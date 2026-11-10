import React, { useState } from 'react';
import ProductList from './components/ProductList'; 

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filterMode, setFilterMode] = useState('all');

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const filteredProducts = products.filter(product => {
    if (filterMode === 'available') return product.inStock;
    if (filterMode === 'outOfStock') return !product.inStock;
    return true; 
  });

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1>Product Dashboard</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
        <button onClick={() => setFilterMode('all')}>All Products</button>
        <button onClick={() => setFilterMode('available')}>In Stock</button>
        <button onClick={() => setFilterMode('outOfStock')}>Out of Stock</button>
      </div>

      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </div>
  );
}

export default App; 
