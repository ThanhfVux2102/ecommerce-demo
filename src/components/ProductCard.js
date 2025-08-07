import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '6px',
    textAlign: 'center',
    width: '250px',
    margin: '10px'
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {/* Link sang trang chi tiết */}
      <Link to={`/product/${product.id}`}>View Details</Link>

      <br /><br />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
