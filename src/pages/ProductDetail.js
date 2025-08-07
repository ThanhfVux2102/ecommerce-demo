import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Product not found.</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <img src={product.image} alt={product.name} width="200px" />
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <div style={{ marginTop: '20px' }}>
        <Link to="/">⬅ Back to Products</Link>
      </div>
    </div>
  );
}
