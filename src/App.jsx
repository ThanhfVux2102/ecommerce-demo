import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav style={{ padding: '16px', background: '#eee' }}>
         <Link to="/" style={{ marginRight: '12px' }}>Home</Link>
         <Link to="/cart">Cart</Link>
        </nav>


        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
