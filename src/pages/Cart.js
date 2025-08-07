import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial'
  };

  const itemStyle = {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/">Go back to products</Link>
        </>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={itemStyle}>
              <div>
                <strong>{item.name}</strong> - ${item.price}
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <div style={{ marginTop: '20px' }}>
            <button onClick={clearCart} style={{ marginRight: '10px' }}>
              Clear Cart
            </button>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
