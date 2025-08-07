import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍️ Product Listing</h2>

      <div style={{ margin: '20px 0' }}>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Shoes">Shoes</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
